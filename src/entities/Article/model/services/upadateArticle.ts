import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Article } from '../types/article';

export const updateArticle = createAsyncThunk<
    Article,
    Article,
    ThunkConfig<string>
>('articleDetails/updateArticle', async (article, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.patch<Article>(
            `/articles/${article.id}`,
            article,
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        // console.log(e);
        return rejectWithValue('error');
    }
});
