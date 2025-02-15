import { memo } from 'react';
import clsx from 'clsx';

import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

import cls from './ScrollToolbar.module.scss';

type Props = {
    className?: string;
};

export const ScrollToolbar = memo(({ className }: Props) => {
    return (
        <VStack
            justify="center"
            align="center"
            max
            className={clsx(cls.ScrollToolbar, className)}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
