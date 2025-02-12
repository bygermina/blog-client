import React, { memo } from 'react';
import clsx from 'clsx';

import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props;

    return (
        <Svg
            className={clsx(inverted ? cls.inverted : cls.Icon, className)}
            {...otherProps}
        />
    );
});
