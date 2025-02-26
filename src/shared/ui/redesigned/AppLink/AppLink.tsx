import { LinkProps, NavLink } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

type Props = {
    className?: string;
    variant?: AppLinkVariant;
    activeClassName?: string;
} & LinkProps;

export const AppLink = ({
    to,
    className,
    variant = 'primary',
    activeClassName = '',
    children,
    ...otherProps
}: PropsWithChildren<Props>) => {
    return (
        <NavLink
            {...otherProps}
            to={to}
            className={({ isActive }) =>
                clsx(
                    cls.AppLink,
                    { [activeClassName]: isActive },
                    className,
                    cls[variant],
                )
            }
        >
            {children}
        </NavLink>
    );
};
