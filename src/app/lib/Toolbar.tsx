import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/hooks/useRouteChange';

const toolbarByAppRoute: OptionalRecord<AppRoutes, boolean> = {
    articles: true,
    article_details: true,
};

export function Toolbar() {
    const appRoute = useRouteChange();

    return toolbarByAppRoute[appRoute] ? <ScrollToolbar /> : null;
}
