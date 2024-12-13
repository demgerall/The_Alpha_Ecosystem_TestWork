import { configureStore } from '@reduxjs/toolkit';

import { categoriesSlice, productsSlice, totalSlice } from '@/features';
import { favouritesSlice } from '@/entities';
// import { favouriteReducer } from '@/entities';

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        categories: categoriesSlice.reducer,
        total: totalSlice.reducer,
        favouriteProducts: favouritesSlice.reducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
