import clsx from 'clsx';

import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={clsx(cls.PageLoader, className)}>
        <Skeleton />
    </div>
);
