import clsx from 'clsx';
import { ReactNode, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserInfo, getUserInited } from '@/entities/User';

import { AppRouter } from './providers/router';
import { Toolbar } from './lib/useAppToolbar';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

function ThemedContainer({ children }: { children: ReactNode }) {
    const { theme } = useTheme();

    return (
        <div id="app" className={clsx('app_redesigned', theme)}>
            {children}
        </div>
    );
}

const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        if (!inited) {
            dispatch(getUserInfo());
        }
    }, [dispatch, inited]);

    return (
        <ThemedContainer>
            <Suspense fallback={<AppLoaderLayout />}>
                <MainLayout
                    header={<Navbar />}
                    content={<AppRouter />}
                    sidebar={<Sidebar />}
                >
                    <Toolbar />
                </MainLayout>
            </Suspense>
        </ThemedContainer>
    );
};

export default withTheme(App);
