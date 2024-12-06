import React from 'react';

import { AppRoutes } from './routes/Routes';
import { Header } from '@/widgets';

import './styles/index.scss';

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <AppRoutes />
        </>
    );
};
