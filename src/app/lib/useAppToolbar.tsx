import { FC } from 'react';

import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { AppRoutes } from '@/shared/const/router';

const toolbarByAppRoute: OptionalRecord<AppRoutes, FC> = {
    articles: ScrollToolbar,
    article_details: ScrollToolbar,
};

export function useAppToolbar(): FC {
    const appRoute = useRouteChange();

    return toolbarByAppRoute[appRoute] as FC;
}
