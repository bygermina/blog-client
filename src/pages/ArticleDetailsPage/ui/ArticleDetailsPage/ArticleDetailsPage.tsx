import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleRating } from '@/features/articleRating';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';

import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { articleDetailsPageReducer } from '../../model/slices';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            window.scrollTo(0, 0);
        }
    }, [id]);

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <StickyContentLayout right={<AdditionalInfoContainer />}>
                <Page className={clsx(cls.ArticleDetailsPage, className)}>
                    <VStack gap="16" max>
                        <DetailsContainer />
                        <ArticleRating articleId={id} />
                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={id} />
                    </VStack>
                </Page>
            </StickyContentLayout>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
