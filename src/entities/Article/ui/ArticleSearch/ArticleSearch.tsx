import { useTranslation } from 'react-i18next';

import { Input } from '@/shared/ui/redesigned/Input';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';

import { useSearch } from './useSearch';

export const ArticleSearch = () => {
    const { t } = useTranslation();
    const { search, onChangeSearch } = useSearch();

    return (
        <Input
            type="text"
            onChange={onChangeSearch}
            value={search}
            size="s"
            placeholder={t('Поиск')}
            addonLeft={<Icon Svg={SearchIcon} />}
        />
    );
};
