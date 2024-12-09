import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const uploadImage = createAsyncThunk<
    string,
    { data: FormData; fileName: string },
    ThunkConfig<string>
>('image/upload', async ({ data, fileName }, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.post<string>(
            `/images/${fileName}`,
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

        // const data = await response.data.json();
        // setFile(data.url); // Assuming the backend returns the URL of the uploaded file

        return response.data;
    } catch (e) {
        // console.log(e);
        return rejectWithValue('error');
    }
});
