import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteForbidden,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig = {
    main: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    // [AppRoutes.SETTINGS]: {
    //     path: getRouteSettings(),
    //     element: <SettingsPage />,
    // },
    about: {
        path: getRouteAbout(),
        element: <AboutPage />,
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
    admin_panel: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
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
