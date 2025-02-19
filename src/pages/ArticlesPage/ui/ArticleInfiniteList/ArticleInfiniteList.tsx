import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import {
    getArticlesPageView,
    ArticleList,
    getArticles,
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageSearch,
} from '@/entities/Article';
import { Text } from '@/shared/ui/redesigned/Text';

type Props = {
    className?: string;
};

export const ArticleInfiniteList = memo(({ className }: Props) => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const { t } = useTranslation();

    const search = useSelector(getArticlesPageSearch);

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            search={search}
            className={className}
        />
    );
});
