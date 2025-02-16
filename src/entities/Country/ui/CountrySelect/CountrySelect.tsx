import { useTranslation } from 'react-i18next';

import { ListBox } from '@/shared/ui/redesigned/Popups';

import { Country } from '../../model/types/country';

type Props = {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
};

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = ({
    className,
    value,
    onChange,
    readonly,
}: Props) => {
    const { t } = useTranslation();

    const onChangeHandler = (value: string) => {
        onChange?.(value as Country);
    };
    return (
        <ListBox
            className={className}
            value={value}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );
};
