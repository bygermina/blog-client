import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
// @ts-ignore
// eslint-disable-next-line ulbi-tv-plugin/layer-imports

import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
    search?: string;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const ArticleList = memo(
    ({
        className,
        articles,
        view = ArticleView.BIG,
        isLoading,
        target,
        search,
    }: ArticleListProps) => {
        const { t } = useTranslation();

        if (!isLoading && !articles.length) {
            return (
                <div
                    className={classNames(cls.ArticleList, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Text size="l" title={t('Статьи не найдены')} />
                </div>
            );
        }

        return (
            <HStack
                wrap="wrap"
                gap="16"
                className={classNames(cls.ArticleListRedesigned, {}, [])}
                data-testid="ArticleList"
            >
                {articles.map((item) => (
                    <ArticleListItem
                        article={item}
                        view={view}
                        target={target}
                        key={item.id}
                        className={cls.card}
                        search={search}
                    />
                ))}
                {isLoading && getSkeletons(view)}
            </HStack>
        );
    },
);
