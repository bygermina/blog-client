import { LinkProps, NavLink } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import clsx from 'clsx';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                clsx(
                    cls.AppLink,
                    { [activeClassName]: isActive },
                    className,
                    cls[variant],
                )
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
