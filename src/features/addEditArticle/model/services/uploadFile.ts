import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const uploadImage = createAsyncThunk<
    string,
    FormData,
    ThunkConfig<string>
>('image/upload', async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.post<string>(`/images`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        // console.log(e);
        return rejectWithValue('error');
    }
});
