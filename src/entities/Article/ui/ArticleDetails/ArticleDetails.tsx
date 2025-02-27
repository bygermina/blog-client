import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { AppImage } from '@/shared/ui/redesigned/AppImage';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { InfoSEO } from '@/shared/lib/components/SEO';
import { Html } from '@/shared/ui/redesigned/Html/Html';

import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { renderArticleBlock } from './renderBlock';

import cls from './ArticleDetails.module.scss';
import { API_URL } from '@/shared/api/api';

// eslint-disable-next-line prefer-destructuring
const PROJECT = process.env.PROJECT;

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            {/* Добавить редактирование с фронта SEO */}
            <InfoSEO title={article?.title} description={article?.subtitle} />
            <Html title={article?.title} size="l" bold />
            <Html title={article?.subtitle} />
            <AppImage
                fallback={<Skeleton width="100%" height={420} border="16px" />}
                src={`${API_URL}/${article?.img}`}
                className={cls.img}
            />
            {article?.blocks?.map(renderArticleBlock)}
        </>
    );
};

export const ArticleDetailsSkeleton = () => {
    return (
        <VStack gap="16" max>
            <Skeleton
                className={cls.avatar}
                width={200}
                height={200}
                border="50%"
            />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
        </VStack>
    );
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (PROJECT !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = <ArticleDetailsSkeleton />;
    } else if (error) {
        content = (
            <Text
                align="center"
                title={t('Произошла ошибка при загрузке статьи.')}
            />
        );
    } else {
        content = <Redesigned />;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={clsx(cls.ArticleDetails, className)}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
