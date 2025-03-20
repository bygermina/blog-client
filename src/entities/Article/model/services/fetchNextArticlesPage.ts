import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import {
    getArticlesListHasMore,
    getArticlesListIsLoading,
    getArticlesListNum,
} from '../selectors/articlesListSelectors';
import { articlesPageActions } from '../slice/articlesListSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    undefined,
    ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getArticlesListHasMore(getState());
    const page = getArticlesListNum(getState());
    const isLoading = getArticlesListIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList({}));
    }
});
