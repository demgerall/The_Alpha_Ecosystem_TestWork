import { omit } from 'lodash';

import { productType } from '@/entities';

export const setProductToFavourite = (product: productType) => ({
    type: 'ADD_PRODUCT_TO_FAVOURITE',
    payload: product,
});
export const deleteProductFromFavourite = (id: number) => ({
    type: 'DELETE_PRODUCT_FROM_FAVOURITE',
    payload: id,
});

interface StateSchema {
    favouriteProducts: Array<productType>;
}

const initialState: StateSchema = {
    favouriteProducts: [],
};

export const favouriteSlice = (
    state = initialState,
    action: { type: any; payload: any },
) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_FAVOURITE':
            return {
                favouriteProducts: [...state.favouriteProducts, action.payload],
            };
        case 'DELETE_PRODUCT_FROM_FAVOURITE':
            return {
                favouriteProducts: state.favouriteProducts.filter(item => {
                    return item.id !== action.payload;
                }),
            };
        default:
            return state;
    }
};
