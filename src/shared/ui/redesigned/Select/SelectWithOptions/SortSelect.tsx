import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

import { ListBox } from '../../Popups';

type Props<T> = {
    className?: string;
    sort: T;
    onChange: (newSort: T) => void;
};

export const SortSelect = <T extends string>({
    className,
    onChange,
    sort,
}: Props<T>) => {
    const { t } = useTranslation();

    const sortFieldOptions = useMemo(
        () => [
            {
                value: 'createdAt',
                content: t('дате создания'),
            },
            {
                value: 'title',
                content: t('названию'),
            },
            {
                value: 'views',
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    return (
        <ListBox items={sortFieldOptions} value={sort} onChange={onChange} />
    );
};
