import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Article } from '../types/article';

export const createArticle = createAsyncThunk<
    Article,
    Article,
    ThunkConfig<string>
>('articleDetails/createArticle', async (article, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.post<Article>('/articles', article);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
