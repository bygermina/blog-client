import clsx from 'clsx';

import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

import cls from './PageLoader.module.scss';

type Props = {
    className?: string;
};

export const PageLoader = ({ className }: Props) => (
    <div className={clsx(cls.PageLoader, className)}>
        <Skeleton />
    </div>
);
