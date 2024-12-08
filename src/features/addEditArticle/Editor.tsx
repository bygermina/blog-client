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
} from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

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
    const [file, setFile] = useState('');
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        if (id) {
            dispatch(fetchArticleById(id)).then((response) => {
                if (response.payload) {
                    const article = response.payload as Article;

                    setTitle(article.title);
                    setSubTitle(article.subtitle);
                    setFile(article.img ?? '');
                    // @ts-ignore
                    setBlocks(article.blocks);
                }
            });
        }
    }, [dispatch, id]);

    useEffect(() => {
        editorInstance.current = new EditorJS({
            holder: 'editorjs',
            placeholder: t('Добавьте текст..'),
            tools: {
                image: {
                    class: SimpleImage,
                    config: {
                        endpoints: {
                            byFile: 'http://localhost:3050/uploadFile', // upload endpoint
                            byUrl: 'http://localhost:3050/fetchUrl', // get by URL
                        },
                    },
                },
            },
            data: {
                blocks: id ? blocks : [],
            },
        });

        return () => {
            if (editorInstance.current) {
                editorInstance.current = null;
            }
        };
    }, [blocks, id, t]);

    const handleSave = useCallback(async () => {
        if (editorInstance.current) {
            try {
                const outputData = await editorInstance.current.save();

                const article = {
                    title,
                    subtitle,
                    img: file, // сюда вставить ссылку вместо файла
                    blocks: outputData.blocks,
                };

                // @ts-ignore
                if (user.user?.id) {
                    if (id) {
                        dispatch(
                            updateArticle({
                                id,
                                ...article,
                                // @ts-ignore
                                userId: user.user?.id,
                                type: [ArticleType.ALL],
                            }),
                        );
                    } else {
                        dispatch(
                            createArticle({
                                ...article,
                                // @ts-ignore
                                userId: user.user?.id,
                                type: [ArticleType.ALL],
                            }),
                        );
                    }
                }

                console.log('Article data: ', outputData);
            } catch (error) {
                console.error('Saving failed: ', error);
            }
        }
        // @ts-ignore
    }, [dispatch, file, id, subtitle, title, user.user?.id]);

    return (
        <div>
            <Input
                label={t('Название')}
                placeholder={t('Введите название')}
                value={title}
                onChange={setTitle}
            />
            <Input
                label={t('Подназвание')}
                placeholder={t('Введите подназвание')}
                value={subtitle}
                onChange={setSubTitle}
            />
            <Input
                label={t('Изображение')}
                placeholder={t('изображение')}
                value={file}
                onChange={setFile}
                type="file"
            />
            <div id="editorjs" />
            <Button onClick={handleSave}>{t('Сохранить')}</Button>
        </div>
    );
};
