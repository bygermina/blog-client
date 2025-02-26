import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';

import { TabItem } from '@/shared/ui/redesigned/Tabs/Tabs';
import { ArticleType } from '@/entities/Article';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

type Props = {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
};

export const ArticleTypeTabs = memo(
    ({ className, value, onChangeType }: Props) => {
        const { t } = useTranslation();

        const typeTabs = useMemo<TabItem<ArticleType>[]>(
            () => [
                {
                    value: 'ALL',
                    content: t('Все статьи'),
                },
                {
                    value: 'EUROPE',
                    content: t('Европа'),
                },
                {
                    value: 'ASIA',
                    content: t('Азия'),
                },
            ],
            [t],
        );

        const onTabClick = useCallback(
            (tab: TabItem) => {
                onChangeType(tab.value as ArticleType);
            },
            [onChangeType],
        );

        return (
            <Tabs
                direction="column"
                tabs={typeTabs}
                value={value}
                onTabClick={onTabClick}
                className={className}
            />
        );
    },
);
