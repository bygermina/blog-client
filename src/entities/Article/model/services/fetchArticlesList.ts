import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

import {
    getArticlesListLimit,
    getArticlesListNum,
    getArticlesListOrder,
    getArticlesListSearch,
    getArticlesListSort,
    getArticlesListType,
} from '../selectors/articlesListSelectors';
import { Articles } from '../types/articlesPageSchema';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Articles,
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const limit = getArticlesListLimit(getState());
    const sort = getArticlesListSort(getState());
    const order = getArticlesListOrder(getState());
    const search = getArticlesListSearch(getState());
    const page = getArticlesListNum(getState());
    const type = getArticlesListType(getState());

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        });
        const response = await extra.api.get<Articles>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === 'ALL' ? undefined : type,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
