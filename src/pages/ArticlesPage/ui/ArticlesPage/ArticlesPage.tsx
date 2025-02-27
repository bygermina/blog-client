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
import {
    ArticleSearch,
    initArticlesList,
    articlesPageReducer,
    fetchNextArticlesPage,
} from '@/entities/Article';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';

import { ArticleInfiniteList } from '../../../../entities/Article/ui/ArticleInfiniteList/ArticleInfiniteList';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';

import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesList: articlesPageReducer,
};

const Content = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesList(searchParams));
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
                top={
                    <HStack gap="16">
                        <ViewSelectorContainer />
                        <ArticleSearch />
                    </HStack>
                }
                right={<ArticlesFilters />}
            >
                <Content />
            </StickyContentLayout>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
