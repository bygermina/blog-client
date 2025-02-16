import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/hooks/useRouteChange';

const toolbarByAppRoute: OptionalRecord<AppRoutes, JSX.Element> = {
    articles: <ScrollToolbar />,
    article_details: <ScrollToolbar />,
};

export function Toolbar() {
    const appRoute = useRouteChange();

    return toolbarByAppRoute[appRoute] ? toolbarByAppRoute[appRoute] : null;
}
