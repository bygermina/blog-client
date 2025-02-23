import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { Button } from '@/shared/ui/redesigned/Button';
import { getRouteArticleCreate } from '@/shared/const/router';
import { getUserAuthData } from '@/entities/User';

import cls from './ArticlesFilters.module.scss';

type Props = {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
};

export const ArticlesFilters = memo(
    ({
        className,
        onChangeType,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
        type,
    }: Props) => {
        const { t } = useTranslation();
        const navigate = useNavigate();
        const isAuth = useSelector(getUserAuthData);

        return (
            <Card className={clsx(cls.ArticlesFilters, className)} padding="24">
                <VStack gap="32">
                    <ArticleTypeTabs
                        value={type}
                        onChangeType={onChangeType}
                        className={cls.tabs}
                    />
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    {isAuth && (
                        <Button
                            onClick={() => {
                                navigate(getRouteArticleCreate());
                            }}
                        >
                            {t('Создать статью')}
                        </Button>
                    )}
                </VStack>
            </Card>
        );
    },
);
