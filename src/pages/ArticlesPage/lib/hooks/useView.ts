import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ArticleView,
    getArticlesListView,
    articlesPageActions,
} from '@/entities/Article';

export const useView = () => {
    const view = useSelector(getArticlesListView);
    const dispatch = useAppDispatch();

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );
    return {
        view,
        onChangeView,
    };
};
