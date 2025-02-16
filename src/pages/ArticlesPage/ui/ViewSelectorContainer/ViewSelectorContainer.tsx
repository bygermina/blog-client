import { ArticleViewSelector } from '@/features/ArticleViewSelector';

import { useView } from '../../lib/hooks/useView';

type Props = {
    className?: string;
};

export const ViewSelectorContainer = ({ className }: Props) => {
    const { view, onChangeView } = useView();

    return (
        <ArticleViewSelector
            className={className}
            view={view}
            onViewClick={onChangeView}
        />
    );
};
