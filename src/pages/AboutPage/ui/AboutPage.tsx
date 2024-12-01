import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { InfoSEO } from '@/shared/lib/components/SEO';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            <InfoSEO
                title={t('About Page')}
                description={t('About Page')}
                keywords={t('About Page')}
            />
            {t('О сайте')}
        </Page>
    );
};

export default AboutPage;
