// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { routeConfig } from '@/app/providers/router/config/routeConfig';

export type AppRoutes = keyof typeof routeConfig;

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: 'main',
    // [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteAbout()]: 'about',
    [getRouteProfile(':id')]: 'profile',
    [getRouteArticles()]: 'articles',
    [getRouteArticleDetails(':id')]: 'article_details',
    [getRouteArticleCreate()]: 'article_create',
    [getRouteArticleEdit(':id')]: 'article_edit',
    [getRouteAdmin()]: 'admin_panel',
    [getRouteForbidden()]: 'forbidden',
};
