import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import {
    ArticleSortField,
    ArticleType,
    getArticlesListOrder,
    getArticlesListSort,
    getArticlesListType,
    articlesPageActions,
    fetchArticlesList,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export function useArticleFilters() {
    const sort = useSelector(getArticlesListSort);
    const order = useSelector(getArticlesListOrder);
    const type = useSelector(getArticlesListType);

    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(newSort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageActions.setType(value));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return {
        sort,
        order,
        type,
        onChangeSort,
        onChangeOrder,
        onChangeType,
    };
}
