import { useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import EditorJS from '@editorjs/editorjs';
import SimpleImage from '@editorjs/image';

import { Button } from '@/shared/ui/redesigned/Button';

const blocks = [
    {
        type: 'paragraph',
        data: {
            text: 'This is a sample paragraph. You can edit this text to see how the editor works.',
        },
    },
    {
        type: 'image',
        data: {
            file: {
                url: 'https://example.com/sample-image.jpg',
            },
            caption: 'Sample Image',
            withBorder: true,
            withBackground: false,
            stretched: false,
        },
    },
    {
        type: 'paragraph',
        data: {
            text: 'Here is another paragraph. You can add more paragraphs and images as needed.',
        },
    },
    {
        type: 'image',
        data: {
            file: {
                url: 'https://example.com/another-sample-image.jpg',
            },
            caption: 'Another Sample Image',
            withBorder: false,
            withBackground: true,
            stretched: true,
        },
    },
];

export const Editor = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    const isEdit = Boolean(id);
    const editorInstance = useRef<EditorJS | null>(null);

    useEffect(() => {
        editorInstance.current = new EditorJS({
            holder: 'editorjs',
            placeholder: t('Добавьте текст..'),
            tools: {
                // paragraph: {
                //     class: Paragraph,
                //     inlineToolbar: true,
                // },
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
            data: isEdit
                ? {
                      blocks,
                  }
                : {
                      blocks: [],
                  },
        });

        return () => {
            if (editorInstance.current) {
                editorInstance.current.destroy();
                editorInstance.current = null;
            }
        };
    }, [isEdit, t]);

    const handleSave = useCallback(async () => {
        if (editorInstance.current) {
            try {
                const outputData = await editorInstance.current.save();
                console.log('Article data: ', outputData);
            } catch (error) {
                console.error('Saving failed: ', error);
            }
        }
    }, []);

    return (
        <div>
            <div id="editorjs" />
            <Button onClick={handleSave}>{t('Сохранить')}</Button>
        </div>
    );
};
