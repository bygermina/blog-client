import { useEffect, useRef, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import EditorJS from '@editorjs/editorjs';
import SimpleImage from '@editorjs/image';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import {
    Article,
    ArticleType,
    createArticle,
    fetchArticleById,
    updateArticle,
    Block,
} from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { uploadImage } from '../model/services/uploadFile';

import cls from './Editor.module.scss';

// const blocks = [
//     {
//         type: 'paragraph',
//         data: {
//             text: 'This is a sample paragraph. You can edit this text to see how the editor works.',
//         },
//     },
//     {
//         type: 'image',
//         data: {
//             file: {
//                 url: 'https://example.com/sample-image.jpg',
//             },
//             caption: 'Sample Image',
//             withBorder: true,
//             withBackground: false,
//             stretched: false,
//         },
//     },
// ];

export const Editor = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const user = useSelector(getUserAuthData);

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
                    setBlocks(article.blocks);
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
                                byFile: 'http://localhost:3050/uploadFile', // upload endpoint
                                byUrl: `http://localhost:3050/${1}`, // get by URL
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
                        blocks: outputData.blocks as Block[],
                        userId: user?.id,
                        type: [ArticleType.ALL],
                    };

                    const action = id ? updateArticle : createArticle;

                    dispatch(action(article));
                }
            } catch (error) {
                console.error('Saving failed: ', error);
            }
        }
    }, [dispatch, id, subtitle, title, url, user?.id]);

    const handleFileChange = async (formData: FormData) => {
        const fileName = 'file';

        const request = await dispatch(
            uploadImage({ data: formData, fileName }),
        );

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
            <Input
                label={t('Изображение')}
                placeholder={t('изображение')}
                onChange={handleFileChange}
                type="file"
                className={cls.input}
            />
            <div id="editorjs" />
            <Button onClick={handleSave}>{t('Сохранить')}</Button>
        </div>
    );
};
