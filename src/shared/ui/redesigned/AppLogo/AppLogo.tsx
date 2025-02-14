import clsx from 'clsx';

import AppSvg from '@/shared/assets/icons/app-image.svg';

import { HStack } from '../Stack';

import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = ({ className, size = 50 }: AppLogoProps) => {
    return (
        <HStack
            max
            justify="center"
            className={clsx(cls.appLogoWrapper, className)}
        >
            <AppSvg
                width={size}
                height={size}
                color="black"
                className={cls.appLogo}
            />
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </HStack>
    );
};
