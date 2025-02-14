import { LinkProps, NavLink } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    activeClassName?: string;
}

export const AppLink = ({
    to,
    className,
    variant = 'primary',
    activeClassName = '',
    children,
    ...otherProps
}: PropsWithChildren<AppLinkProps>) => {
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
