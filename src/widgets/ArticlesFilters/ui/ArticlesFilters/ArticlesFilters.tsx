import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleTypeTabs } from '@/entities/Article';
import { Button } from '@/shared/ui/redesigned/Button';
import { getRouteArticleCreate } from '@/shared/const/router';
import { getUserAuthData } from '@/entities/User';

import { ArticleSortSelector } from './ArticleSortSelector/ArticleSortSelector';
import { useArticleFilters } from './useArticleFilters';

import cls from './ArticlesFilters.module.scss';

type Props = {
    className?: string;
};

export const ArticlesFilters = memo(({ className }: Props) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const isAuth = useSelector(getUserAuthData);

    const { onChangeSort, onChangeType, sort, type, onChangeOrder, order } =
        useArticleFilters();

    return (
        <Card className={clsx(cls.ArticlesFilters, className)} padding="24">
            <VStack gap="32">
                <ArticleTypeTabs
                    value={type}
                    onChange={onChangeType}
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
});
