import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import clsx from 'clsx';
import Masonry from 'react-masonry-css';

import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
// @ts-ignore
// eslint-disable-next-line ulbi-tv-plugin/layer-imports

import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';

type Props = {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
    search?: string;
};

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

export const ArticleList = ({
    className,
    articles,
    view = ArticleView.BIG,
    isLoading,
    target,
    search,
}: Props) => {
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={clsx(cls.ArticleList, className, cls[view])}>
                <Text size="l" title={t('Статьи не найдены')} />
            </div>
        );
    }

    return view === ArticleView.BIG ? (
        <HStack wrap="wrap" gap="16" data-testid="ArticleList">
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
    ) : (
        <Masonry
            breakpointCols={3}
            className={cls['my-masonry-grid']}
            columnClassName={cls['my-masonry-grid_column']}
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
        </Masonry>
    );
};
