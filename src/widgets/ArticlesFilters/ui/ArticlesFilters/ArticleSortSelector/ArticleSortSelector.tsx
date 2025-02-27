import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { OrderSelect } from '@/shared/ui/redesigned/Select/SelectWithOptions/OrderSelect';
import { SortSelect } from '@/shared/ui/redesigned/Select/SelectWithOptions/SortSelect';

import cls from './ArticleSortSelector.module.scss';

type Props = {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
};

export const ArticleSortSelector = ({
    className,
    onChangeOrder,
    onChangeSort,
    order,
    sort,
}: Props) => {
    const { t } = useTranslation();

    return (
        <div className={clsx(cls.ArticleSortSelectorRedesigned, className)}>
            <VStack gap="8">
                <Text text={t('Сортировать по:')} />
                <SortSelect sort={sort} onChange={onChangeSort} />
                <OrderSelect order={order} onChange={onChangeOrder} />
            </VStack>
        </div>
    );
};
