import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { productType } from '../types/types';

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, thunkApi) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/products`,
            );
            return response.data;
        } catch (e) {
            console.error(e);
            return thunkApi.rejectWithValue(e);
        }
    },
);

interface StateSchema {
    list: Array<productType>;
    isLoading: boolean;
}

const initialState: StateSchema = {
    list: [],
    isLoading: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProducts.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, state => {
            state.isLoading = false;
        });
    },
});
