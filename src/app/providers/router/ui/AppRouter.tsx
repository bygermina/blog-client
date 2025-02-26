import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

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
                        route.authOnly ? (
                            <RequireAuth roles={route.roles}>
                                <Suspense fallback={<PageLoader />}>
                                    {route.element}
                                </Suspense>
                            </RequireAuth>
                        ) : (
                            <Suspense fallback={<PageLoader />}>
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
