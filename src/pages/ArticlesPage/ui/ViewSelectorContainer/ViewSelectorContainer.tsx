import { memo } from 'react';

import { ArticleViewSelector } from '@/features/ArticleViewSelector';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

type Props = {
    className?: string;
};

export const ViewSelectorContainer = memo(({ className }: Props) => {
    const { view, onChangeView } = useArticleFilters();

    return (
        <ArticleViewSelector
            className={className}
            view={view}
            onViewClick={onChangeView}
        />
    );
});
