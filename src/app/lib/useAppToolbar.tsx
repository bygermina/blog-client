import { ReactElement } from 'react';

import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { AppRoutes } from '@/shared/const/router';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        articles: <ScrollToolbar />,
        article_details: <ScrollToolbar />,
    };

    return toolbarByAppRoute[appRoute];
}
