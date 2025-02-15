import { ReactElement } from 'react';
import clsx from 'clsx';

import cls from './StickyContentLayout.module.scss';

type Props = {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
};

export const StickyContentLayout = ({
    className,
    content,
    left,
    right,
}: Props) => {
    return (
        <div className={clsx(cls.MainLayout, className)}>
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    );
};
