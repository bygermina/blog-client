import { createSlice } from '@reduxjs/toolkit';

import { registerByUsername } from '../services/register/register';

const initialState = {
    isLoading: false,
    username: '',
    password: '',
};

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerByUsername.pending, (state) => {
                // state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registerByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(registerByUsername.rejected, (state, action) => {
                state.isLoading = false;
                // state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: registerActions } = registerSlice;
export const { reducer: registerReducer } = registerSlice;
