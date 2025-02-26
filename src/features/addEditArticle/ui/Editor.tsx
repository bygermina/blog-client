import { useEffect, useRef, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import EditorJS from '@editorjs/editorjs';
import SimpleImage from '@editorjs/image';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import {
    Article,
    createArticle,
    fetchArticleById,
    updateArticle,
    Block,
} from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { $api } from '@/shared/api/api';

import { uploadImage } from '../model/services/uploadFile';

import cls from './Editor.module.scss';

const processBlocks = (blocks: Block[]) => {
    return blocks.map((block) => {
        if (block.type === 'image') {
            return {
                ...block,
                data: {
                    ...block.data,
                    file: {
                        // @ts-ignore
                        ...block.data.file,
                        // @ts-ignore
                        url: `${__API__}/${block.data.file.url}`,
                    },
                },
            };
        }
        return block;
    });
};

const cleanImagePaths = (blocks: Block[]) => {
    return blocks.map((block) => {
        // @ts-ignore
        if (block.type === 'image' && block.data.file?.url) {
            return {
                ...block,
                data: {
                    ...block.data,
                    file: {
                        // @ts-ignore
                        ...block.data.file,
                        // @ts-ignore
                        url: block.data.file.url.replace(`${__API__}/`, ''),
                    },
                },
            };
        }
        return block;
    });
};

export const Editor = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const user = useSelector(getUserAuthData);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const editorInstance = useRef<EditorJS | null>(null);

    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');
    const [url, setUrl] = useState('');
    const [blocks, setBlocks] = useState<Block[]>([]);

    useEffect(() => {
        if (id) {
            dispatch(fetchArticleById(id)).then((response) => {
                if (response.payload) {
                    const article = response.payload as Article;

                    setTitle(article.title);
                    setSubTitle(article.subtitle);
                    setUrl(article.img ?? '');

                    setBlocks(processBlocks(article.blocks));
                }
            });
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (!editorInstance.current) {
            editorInstance.current = new EditorJS({
                holder: 'editorjs',
                placeholder: t('Добавьте текст..'),
                tools: {
                    image: {
                        class: SimpleImage,
                        config: {
                            endpoints: {
                                byFile: `${__API__}/editor-images`,
                            },
                            additionalRequestHeaders: {
                                Authorization: localStorage.getItem(
                                    USER_LOCALSTORAGE_KEY,
                                ),
                            },
                            uploader: {
                                async uploadByFile(file: File) {
                                    const formData = new FormData();
                                    formData.append('image', file);

                                    return $api
                                        .post(`/editor-images`, formData, {
                                            headers: {
                                                'Content-Type':
                                                    'multipart/form-data',
                                            },
                                        })
                                        .then((result) => {
                                            return {
                                                success: 1,
                                                file: {
                                                    url: `${__API__}/${result.data.file.url}`,
                                                },
                                            };
                                        });
                                },
                            },
                        },
                    },
                },
                data: {
                    blocks: id ? blocks : [],
                },
            });
        }

        return () => {
            if (editorInstance.current) {
                editorInstance.current = null;
            }

            const editor = document.querySelector('#editorjs');

            if (editor) {
                editor.innerHTML = '';
            }
        };
    }, [blocks, id, t]);

    const handleSave = useCallback(async () => {
        if (editorInstance.current) {
            try {
                const outputData = await editorInstance.current.save();

                if (user?.id) {
                    const article = {
                        id: id ?? '',
                        title,
                        subtitle,
                        img: url,
                        blocks: cleanImagePaths(outputData.blocks as Block[]),
                        userId: user?.id,
                        type: ['ALL'],
                    };

                    const action = id ? updateArticle : createArticle;

                    const result = await dispatch(action(article as Article));

                    // @ts-ignore
                    const _id = id ?? result.payload?.id;

                    if (_id) {
                        navigate(`/articles/${_id}`);
                    }
                }
            } catch (error) {
                console.error('Saving failed: ', error);
            }
        }
    }, [dispatch, id, navigate, subtitle, title, url, user?.id]);

    const handleFileChange = async (formData: FormData) => {
        const request = await dispatch(uploadImage({ data: formData, url }));

        // TODO fix this
        if (request.meta.requestStatus === 'fulfilled' && request.payload) {
            setUrl(request.payload);
        }
    };

    return (
        <div>
            <Input
                type="text"
                label={t('Название')}
                placeholder={t('Введите название')}
                value={title}
                onChange={setTitle}
                className={cls.input}
            />
            <Input
                type="text"
                label={t('Подназвание')}
                placeholder={t('Введите подназвание')}
                value={subtitle}
                onChange={setSubTitle}
                className={cls.input}
            />
            <div>
                <img
                    src={`${__API__}/${url}`}
                    alt="article"
                    className={cls.image}
                />
                <Input
                    label={t('Изображение')}
                    placeholder={t('изображение')}
                    onChange={handleFileChange}
                    type="file"
                    className={cls.input}
                />
            </div>
            <div id="editorjs" />
            <Button onClick={handleSave}>{t('Сохранить')}</Button>
        </div>
    );
};
