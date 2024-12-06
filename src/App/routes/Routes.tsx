import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '@/pages/index';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    );
};
