import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { getUserAuthData } from '@/entities/User';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

import { SidebarItemType } from '../../model/types/sidebar';

import cls from './SidebarItem.module.scss';

type Props = {
    item: SidebarItemType;
    collapsed: boolean;
};

export const SidebarItem = memo(({ item, collapsed }: Props) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.auth && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={clsx(cls.itemRedesigned, {
                [cls.collapsedRedesigned]: collapsed,
            })}
            activeClassName={cls.active}
        >
            <Icon Svg={item.Icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
