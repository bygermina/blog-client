import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { Button } from '@/shared/ui/redesigned/Button';

type Props = {
    className?: string;
    short?: boolean;
};

export const LangSwitcher = memo(({ className, short }: Props) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button className={className} onClick={toggle} variant="clear">
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
