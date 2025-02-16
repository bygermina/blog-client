import clsx from 'clsx';

import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

import cls from './ScrollToTopButton.module.scss';

type Props = {
    className?: string;
};

export const ScrollToTopButton = ({ className }: Props) => {
    const onCLick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            Svg={CircleIcon}
            clickable
            onClick={onCLick}
            width={32}
            height={32}
            className={clsx(cls.ScrollToTopButton, className)}
        />
    );
};
