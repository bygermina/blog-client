import { memo, ReactElement } from 'react';
import clsx from 'clsx';

import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = memo(
    ({ className, content, toolbar, header, sidebar }: MainLayoutProps) => {
        return (
            <div className={clsx(cls.MainLayout, className)}>
                <div className={cls.content}>{content}</div>
                <div className={cls.sidebar}>{sidebar}</div>
                <div className={cls.rightbar}>
                    <div className={cls.header}>{header}</div>
                    <div className={cls.toolbar}>{toolbar}</div>
                </div>
            </div>
        );
    },
);
