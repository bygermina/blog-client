import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/home.svg';
import SettingsIcon from '@/shared/assets/icons/star.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import {
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';

import { SidebarItemType } from '../types/sidebar';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);

    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: getRouteArticles(),
            Icon: ArticleIcon,
            text: 'Статьи',
        },
        {
            path: getRouteSettings(),
            Icon: SettingsIcon,
            text: 'Настройки',
        },
    ];

    if (userData) {
        sidebarItemsList.push({
            path: getRouteProfile(userData.id),
            Icon: ProfileIcon,
            text: 'Профиль',
            auth: true,
        });
    }

    return sidebarItemsList;
};
