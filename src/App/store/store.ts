import { configureStore } from '@reduxjs/toolkit';

import { productsSlice, totalSlice } from '@/features';
import { favouriteSlice } from '@/entities';

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        total: totalSlice.reducer,
        favouriteProducts: favouriteSlice,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
