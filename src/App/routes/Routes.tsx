import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { CreateProductPage, ProductItemPage, ProductsPage } from '@/pages';
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
                <Route path={ROUTES.PRODUCT} element={<ProductItemPage />} />
                <Route
                    path={ROUTES.CREATE_PRODUCT}
                    element={<CreateProductPage />}
                />
            </Routes>
        </Suspense>
    );
};
