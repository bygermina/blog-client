import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList, ArticleView } from '@/entities/Article';
import { Text } from '@/shared/ui/redesigned/Text';

import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageSearch,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(
    ({ className }: ArticleInfiniteListProps) => {
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
                // view={view}
                view={ArticleView.BIG}
                articles={articles}
                search={search}
                className={className}
            />
        );
    },
);
