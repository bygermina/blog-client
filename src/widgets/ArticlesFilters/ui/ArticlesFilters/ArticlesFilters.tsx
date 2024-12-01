import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { Input } from '@/shared/ui/redesigned/Input';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Button } from '@/shared/ui/redesigned/Button';

import cls from './ArticlesFilters.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo(
    ({
        className,
        onChangeType,
        onChangeSearch,
        search,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
        type,
    }: ArticlesFiltersProps) => {
        const { t } = useTranslation();
        const navigate = useNavigate();

        return (
            <Card
                className={classNames(cls.ArticlesFilters, {}, [className])}
                padding="24"
            >
                <VStack gap="32">
                    <Input
                        onChange={onChangeSearch}
                        value={search}
                        size="s"
                        placeholder={t('Поиск')}
                        addonLeft={<Icon Svg={SearchIcon} />}
                    />
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
                    <Button
                        onClick={() => {
                            navigate(getRouteArticleCreate());
                        }}
                    >
                        {t('Создать статью')}
                    </Button>
                </VStack>
            </Card>
        );
    },
);
