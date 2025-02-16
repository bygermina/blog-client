import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { InfoSEO } from '@/shared/lib/components/SEO';

import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const Content = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <Page
            data-testid="ArticlesPage"
            onScrollEnd={onLoadNextPart}
            className={cls.ArticlesPageRedesigned}
        >
            <InfoSEO
                title={t('Articles page')}
                description={t('Articles page description')}
                keywords={t('Articles keywords')}
            />
            <ArticleInfiniteList className={cls.list} />
        </Page>
    );
};

const ArticlesPage = () => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <StickyContentLayout
                top={<ViewSelectorContainer />}
                right={<FiltersContainer />}
            >
                <Content />
            </StickyContentLayout>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
