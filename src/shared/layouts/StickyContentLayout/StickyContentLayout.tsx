import { ReactElement } from 'react';
import clsx from 'clsx';

import cls from './StickyContentLayout.module.scss';

type Props = {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
    top?: ReactElement;
};

export const StickyContentLayout = ({
    className,
    content,
    left,
    right,
    top,
}: Props) => {
    return (
        <div className={clsx(cls.MainLayout, className)}>
            {top && <div className={cls.top}>{top}</div>}
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    );
};
