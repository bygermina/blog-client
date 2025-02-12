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
    fallbackInverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Avatar = ({
    className,
    src,
    size = 100,
    alt,
    fallbackInverted,
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={clsx(cls.Avatar, className)}
        />
    );
};
