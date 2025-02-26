import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteForbidden,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { SettingsPage } from '@/pages/SettingsPage';

export const routeConfig = {
    main: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    settings: {
        path: getRouteSettings(),
        element: <SettingsPage />,
    },
    profile: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    articles: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
    },
    article_details: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
    },
    article_create: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    article_edit: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    // admin_panel: {
    //     path: getRouteAdmin(),
    //     element: <AdminPanelPage />,
    //     authOnly: true,
    //     roles: ['MANAGER', 'ADMIN'],
    // },
    forbidden: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    // last
    not_found: {
        path: '*',
        element: <NotFoundPage />,
    },
} satisfies Record<string, AppRoutesProps>;
