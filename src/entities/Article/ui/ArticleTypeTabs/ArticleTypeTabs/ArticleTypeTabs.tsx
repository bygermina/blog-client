import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';

import { TabItem } from '@/shared/ui/redesigned/Tabs/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

import { ArticleType } from '../../../model/types/articleConsts';

type Props = {
    className?: string;
    value: ArticleType;
    onChange: (type: ArticleType) => void;
};

export const ArticleTypeTabs = ({ className, value, onChange }: Props) => {
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
            onChange(tab.value as ArticleType);
        },
        [onChange],
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
};
