import { memo } from 'react';
import clsx from 'clsx';

import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo(({ className, onClick }: OverlayProps) => {
    return <div onClick={onClick} className={clsx(cls.Overlay, className)} />;
});
