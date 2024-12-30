import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import { getRouteArticles, getRouteProfile } from '@/shared/const/router';

import { SidebarItemType } from '../types/sidebar';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const sidebarItemsList: SidebarItemType[] = [
        // {
        //     path: getRouteMain(),
        //     Icon: MainIcon,
        //     text: 'Главная',
        // },
        // {
        //     path: getRouteAbout(),
        //     Icon: AboutIcon,
        //     text: 'О сайте',
        // },
        {
            path: getRouteArticles(),
            Icon: ArticleIcon,
            text: 'Статьи',
        },
    ];

    if (userData) {
        sidebarItemsList.push({
            path: getRouteProfile(userData.id),
            Icon: ProfileIcon,
            text: 'Профиль',
            authOnly: true,
        });
    }

    return sidebarItemsList;
};
