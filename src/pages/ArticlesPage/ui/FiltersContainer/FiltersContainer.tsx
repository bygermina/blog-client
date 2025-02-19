import { memo } from 'react';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

type Props = {
    className?: string;
};

export const FiltersContainer = memo(({ className }: Props) => {
    const { onChangeSort, onChangeType, sort, type, onChangeOrder, order } =
        useArticleFilters();

    return (
        <ArticlesFilters
            type={type}
            order={order}
            onChangeOrder={onChangeOrder}
            sort={sort}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            className={className}
        />
    );
});
