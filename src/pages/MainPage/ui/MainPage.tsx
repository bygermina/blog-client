import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { InfoSEO } from '@/shared/lib/components/SEO';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid="MainPage">
            <InfoSEO
                title={t('Main page')}
                description={t('Main page description')}
                keywords={t('Main keywords')}
            />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
