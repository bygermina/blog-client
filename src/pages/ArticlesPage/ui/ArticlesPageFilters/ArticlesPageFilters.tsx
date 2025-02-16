import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import clsx from 'clsx';

import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import cls from './ArticlesPageFilters.module.scss';
import { useView } from '../../lib/hooks/useView';

type Props = {
    className?: string;
};

export const ArticlesPageFilters = memo(({ className }: Props) => {
    const { t } = useTranslation();
    const {
        onChangeSort,
        onChangeType,
        sort,
        type,
        onChangeSearch,
        search,
        onChangeOrder,
        order,
    } = useArticleFilters();

    const { view, onChangeView } = useView();

    return (
        <div className={clsx(cls.ArticlesPageFilters, className)}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    type="text"
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});
