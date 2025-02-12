import clsx from 'clsx';

import { Loader } from '@/shared/ui/deprecated/Loader';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={clsx(cls.PageLoader, className)}>
        <Loader />
    </div>
);
