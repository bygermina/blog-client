import { memo } from 'react';
import clsx from 'clsx';

import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;

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
