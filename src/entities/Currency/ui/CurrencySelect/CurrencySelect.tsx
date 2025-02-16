import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

import { ListBox } from '@/shared/ui/redesigned/Popups';

import { Currency } from '../../model/types/currency';

type Props = {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
};

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = ({
    className,
    value,
    onChange,
    readonly,
}: Props) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            className={className}
            value={value}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );
};
