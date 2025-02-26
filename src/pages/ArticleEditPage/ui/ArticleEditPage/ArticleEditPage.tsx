import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { Page } from '@/widgets/Page';
import { Editor } from '@/features/addEditArticle';

import cls from './ArticleEditPage.module.scss';

type Props = {
    className?: string;
};

const ArticleEditPage = memo(({ className }: Props) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={clsx(cls.ArticleEditPage, className)}>
            {isEdit ? t('Редактирование статьи') : t('Создание новой статьи')}
            <Editor />
            {/* Добавить редактирование с фронта SEO title, description, keywords */}
        </Page>
    );
});

export default ArticleEditPage;
