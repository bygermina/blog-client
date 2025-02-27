import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

import { SortOrder } from '@/shared/types/sort';

import { SelectOption } from '../Select';
import { ListBox } from '../../Popups';

type Props = {
    className?: string;
    order: SortOrder;
    onChange: (newOrder: SortOrder) => void;
};

export const OrderSelect = ({ className, onChange, order }: Props) => {
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    return <ListBox items={orderOptions} value={order} onChange={onChange} />;
};
