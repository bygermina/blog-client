import { memo, ReactNode, useCallback } from 'react';
import clsx from 'clsx';

import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

import cls from './Tabs.module.scss';

export interface TabItem<T extends string = string> {
    value: T;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo(
    ({ className, tabs, onTabClick, value, direction = 'row' }: TabsProps) => {
        const clickHandle = useCallback(
            (tab: TabItem) => () => {
                onTabClick(tab);
            },
            [onTabClick],
        );

        return (
            <Flex
                direction={direction}
                gap="8"
                align="start"
                className={clsx(cls.Tabs, className)}
            >
                {tabs.map((tab) => {
                    const isSelected = tab.value === value;

                    return (
                        <Card
                            variant={isSelected ? 'light' : 'normal'}
                            className={clsx(cls.tab, {
                                [cls.selected]: isSelected,
                            })}
                            key={tab.value}
                            onClick={clickHandle(tab)}
                            border="round"
                        >
                            {tab.content}
                        </Card>
                    );
                })}
            </Flex>
        );
    },
);
