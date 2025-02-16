import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';

export function useArticleFilters() {
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

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

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
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
        search,
        type,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
    };
}
