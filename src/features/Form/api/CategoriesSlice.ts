import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { categoriesType } from '@/entities';

export const getCategories = createAsyncThunk(
    'categories/getCategoriesList',
    async (_, thunkApi) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/categories`,
            );
            return response.data;
        } catch (e) {
            console.error(e);
            return e;
        }
    },
);

interface StateSchema {
    categories: Array<categoriesType>;
    isLoading: boolean;
}

const initialState: StateSchema = {
    categories: [],
    isLoading: false,
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getCategories.pending, state => {
                state.isLoading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.isLoading = false;
            })
            .addCase(getCategories.rejected, state => {
                state.isLoading = false;
            });
    },
});
