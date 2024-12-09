import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { uploadImage } from '../services/uploadFile';
import { ImageSchema } from '../types/ImageSchema';

const initialState: ImageSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const imageSlice = createSlice({
    name: 'imageDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(uploadImage.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                uploadImage.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(uploadImage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: imageActions } = imageSlice;
export const { reducer: imageReducer } = imageSlice;
