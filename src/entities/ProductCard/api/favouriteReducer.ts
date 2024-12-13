import { productType } from '@/entities';
import { createSlice } from '@reduxjs/toolkit';

interface StateSchema {
    favouriteProducts: Array<productType>;
}

const initialState: StateSchema = {
    favouriteProducts: [],
};

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addProductToFavourite(state, action) {
            return {
                favouriteProducts: [...state.favouriteProducts, action.payload],
            };
        },
        deleteProductFromFavourite(state, action) {
            return {
                favouriteProducts: state.favouriteProducts.filter(item => {
                    return item.id !== action.payload;
                }),
            };
        },
    },
});

export const { addProductToFavourite, deleteProductFromFavourite } =
    favouritesSlice.actions;
