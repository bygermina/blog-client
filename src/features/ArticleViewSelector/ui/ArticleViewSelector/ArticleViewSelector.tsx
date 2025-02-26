import { FC, memo, SVGProps } from 'react';
import clsx from 'clsx';

import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import { ArticleView } from '@/entities/Article';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes: { view: ArticleView; icon: FC<SVGProps<SVGSVGElement>> }[] = [
    {
        view: 'SMALL',
        icon: TiledIcon,
    },
    {
        view: 'BIG',
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo(
    ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
        const onClick = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };

        return (
            <Card
                className={clsx(cls.ArticleViewSelectorRedesigned, className)}
                border="round"
            >
                <HStack gap="8">
                    {viewTypes.map((viewType) => (
                        <Icon
                            clickable
                            key={viewType.view}
                            onClick={onClick(viewType.view)}
                            Svg={viewType.icon}
                            className={clsx({
                                [cls.notSelected]: viewType.view !== view,
                            })}
                        />
                    ))}
                </HStack>
            </Card>
        );
    },
);
