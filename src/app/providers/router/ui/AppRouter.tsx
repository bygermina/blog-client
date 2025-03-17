import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLoaderContent } from '@/shared/layouts/AppLoaderLayout/AppLoaderLayout';

import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        route.auth ? (
                            <RequireAuth roles={route.roles}>
                                <Suspense fallback={<AppLoaderContent />}>
                                    {route.element}
                                </Suspense>
                            </RequireAuth>
                        ) : (
                            <Suspense fallback={<AppLoaderContent />}>
                                {route.element}
                            </Suspense>
                        )
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
