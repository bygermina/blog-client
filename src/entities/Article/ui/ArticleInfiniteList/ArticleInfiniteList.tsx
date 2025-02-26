import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import { Text } from '@/shared/ui/redesigned/Text';

import { getArticles } from '../../model/slice/articlesListSlice';
import {
    getArticlesListError,
    getArticlesListIsLoading,
    getArticlesListSearch,
    getArticlesListView,
} from '../../model/selectors/articlesListSelectors';
import { ArticleList } from '../ArticleList/ArticleList';

type Props = {
    className?: string;
};

export const ArticleInfiniteList = memo(({ className }: Props) => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesListIsLoading);
    const view = useSelector(getArticlesListView);
    const error = useSelector(getArticlesListError);
    const { t } = useTranslation();

    const search = useSelector(getArticlesListSearch);

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
