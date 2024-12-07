import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { productType } from '@/entities';

export const getProducts = createAsyncThunk(
    'products/getProductsPage',
    async (page: number = 0, thunkApi) => {
        const limit: number = 20;
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/products?offset=${page * limit}&limit=${limit}`,
            );
            return response.data;
        } catch (e) {
            console.error(e);
            return thunkApi.rejectWithValue(e);
        }
    },
);

interface StateSchema {
    products: Array<productType>;
    isLoading: boolean;
}

const initialState: StateSchema = {
    products: [],
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
            state.products = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, state => {
            state.isLoading = false;
        });
    },
});
