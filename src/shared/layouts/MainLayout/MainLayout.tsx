import { ReactElement } from 'react';
import clsx from 'clsx';

import cls from './MainLayout.module.scss';

type Props = {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    children?: ReactElement;
};

export const MainLayout = ({
    className,
    content,
    children,
    header,
    sidebar,
}: Props) => {
    return (
        <div className={clsx(cls.MainLayout, className)}>
            <div className={cls.content}>{content}</div>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{children}</div>
            </div>
        </div>
    );
};
