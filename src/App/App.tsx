import React, { useEffect } from 'react';

import { AppRoutes } from './routes/Routes';
import { Header } from '@/widgets';
import { getProducts } from '@/entities';
import { useAppDispatch } from '@/shared/libs/hooks/hooks';

import './styles/index.scss';

export const App: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <Header />
            <AppRoutes />
        </>
    );
};
