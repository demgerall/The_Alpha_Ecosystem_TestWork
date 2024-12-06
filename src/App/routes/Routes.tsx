import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ProductsPage } from '@/pages/index';
import { ROUTES } from '@/shared/routes/routes';

export const AppRoutes: React.FC = () => {
    return (
        <Suspense>
            <Routes>
                <Route
                    path={ROUTES.BASE}
                    index
                    element={<Navigate to={'/products'} />}
                />
                <Route path={ROUTES.HOME} element={<ProductsPage />} />
            </Routes>
        </Suspense>
    );
};