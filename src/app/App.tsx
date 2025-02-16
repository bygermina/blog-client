import clsx from 'clsx';
import { Suspense } from 'react';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';

import { AppRouter } from './providers/router';
import { Toolbar } from './lib/useAppToolbar';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

const App = () => {
    const { theme } = useTheme();
    // const dispatch = useAppDispatch();
    // const inited = useSelector(getUserInited);

    // useEffect(() => {
    //     if (!inited) {
    //         dispatch(getUserInfo());
    //     }
    // }, [dispatch, inited]);

    // if (!inited) {
    //     return (
    //         <div id="app" className={clsx('app_redesigned', theme)}>
    //             <AppLoaderLayout />
    //         </div>
    //     );
    // }

    return (
        <div id="app" className={clsx('app_redesigned', theme)}>
            <Suspense fallback={<AppLoaderLayout />}>
                <MainLayout
                    header={<Navbar />}
                    content={<AppRouter />}
                    sidebar={<Sidebar />}
                >
                    <Toolbar />
                </MainLayout>
            </Suspense>
        </div>
    );
};

export default withTheme(App);
