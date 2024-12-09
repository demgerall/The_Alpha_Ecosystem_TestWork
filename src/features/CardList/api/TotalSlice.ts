import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductsTotal = createAsyncThunk(
    'total/getProductTotal',
    async (_, thunkApi) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/products`,
            );
            return response.data.length;
        } catch (e) {
            console.error(e);
            return thunkApi.rejectWithValue(e);
        }
    },
);

const initialState = {
    total: 0,
};

export const totalSlice = createSlice({
    name: 'total',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProductsTotal.pending, state => {});
        builder.addCase(getProductsTotal.fulfilled, (state, action) => {
            state.total = action.payload;
        });
        builder.addCase(getProductsTotal.rejected, state => {});
    },
});
