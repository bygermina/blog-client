import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { getArticlesPageSearch } from '../../model/selectors/articlesListSelectors';

export const useSearch = () => {
    const dispatch = useAppDispatch();
    const search = useSelector(getArticlesPageSearch);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    return {
        search,
        onChangeSearch,
    };
};
