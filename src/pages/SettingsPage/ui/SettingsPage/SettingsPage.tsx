import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';

const SettingsPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <VStack gap="16">
                <Text title={t('Настройки пользователя')} />
            </VStack>
        </Page>
    );
};

export default SettingsPage;
