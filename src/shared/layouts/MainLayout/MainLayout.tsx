import { ReactElement } from 'react';
import clsx from 'clsx';

import cls from './MainLayout.module.scss';

type Props = {
    className?: string;
    header: ReactElement;
    children: ReactElement;
    sidebar: ReactElement;
    right?: ReactElement;
};

export const MainLayout = ({
    className,
    children,
    right,
    header,
    sidebar,
}: Props) => {
    return (
        <div className={clsx(cls.MainLayout, className)}>
            <div className={cls.content}>{children}</div>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{right}</div>
            </div>
        </div>
    );
};
