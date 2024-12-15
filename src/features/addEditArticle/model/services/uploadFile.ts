import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const uploadImage = createAsyncThunk<
    string,
    { data: FormData; url: string },
    ThunkConfig<string>
>('image/upload', async ({ data, url }, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.post<string>(
            `/images?url=${url}`,
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
