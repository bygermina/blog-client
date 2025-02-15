import React, { memo } from 'react';
import clsx from 'clsx';

import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    clickable?: boolean;
    onClick?: () => void;
}

export const Icon = memo(
    ({
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        onClick,
        ...otherProps
    }: IconProps) => {
        const icon = (
            <Svg
                {...otherProps}
                className={clsx(cls.Icon, className)}
                width={width}
                height={height}
            />
        );

        if (clickable) {
            return (
                <button
                    type="button"
                    className={cls.button}
                    onClick={onClick}
                    style={{ height, width }}
                >
                    {icon}
                </button>
            );
        }

        return icon;
    },
);
