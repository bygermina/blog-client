import clsx from 'clsx';

import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => (
    <div className={clsx('lds-ellipsis', className)}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
