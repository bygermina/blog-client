import { CSSProperties, useMemo } from 'react';
import clsx from 'clsx';

import { AppImage } from '../../redesigned/AppImage';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    return (
        <AppImage
            fallback={<Skeleton width={size} height={size} border="50%" />}
            errorFallback={<Icon width={size} height={size} Svg={UserIcon} />}
            src={src}
            alt={alt}
            style={styles}
            className={clsx(cls.Avatar, className)}
        />
    );
};
