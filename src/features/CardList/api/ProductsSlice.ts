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
            return e;
        }
    },
);

export const deleteProductById = createAsyncThunk(
    'products/deleteProductById',
    async (id: number, thunkApi) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_BASE_URL}/products/${id}`,
            );
            return id;
        } catch (e) {
            console.error(e);
            return e;
        }
    },
);

export const getProductById = createAsyncThunk(
    'products/getProductById',
    async (id: number, thunkApi) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/products/${id}`,
            );
            return response.data;
        } catch (e) {
            console.error(e);
            return e;
        }
    },
);

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product: {}, thunkApi) => {
        console.log(product);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/products/`,
                product,
            );
            return response.data;
        } catch (e) {
            console.error(e);
            return e;
        }
    },
);

interface StateSchema {
    products: Array<productType>;
    searchProduct: productType | undefined;
    isLoading: boolean;
    isSuccess: boolean;
}

const initialState: StateSchema = {
    products: [],
    searchProduct: undefined,
    isLoading: false,
    isSuccess: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, state => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
            })
            .addCase(getProducts.rejected, state => {
                state.isLoading = false;
            })
            .addCase(deleteProductById.pending, state => {
                state.isLoading = true;
                state.isSuccess = false;
            })
            .addCase(deleteProductById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = state.products.filter(item => {
                    return item.id !== action.payload;
                });
            })
            .addCase(deleteProductById.rejected, state => {
                state.isLoading = false;
                state.isSuccess = false;
            })
            .addCase(getProductById.pending, state => {
                state.isLoading = true;
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.searchProduct = action.payload;
            })
            .addCase(getProductById.rejected, state => {
                state.isLoading = false;
            })
            .addCase(createProduct.pending, state => {
                state.isLoading = true;
                state.isSuccess = false;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(createProduct.rejected, state => {
                state.isLoading = false;
                state.isSuccess = false;
            });
    },
});
