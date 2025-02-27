import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

const SettingsPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <VStack gap="16">
                <Text title={t('Настройки пользователя')} />
                <HStack gap="8">
                    <ThemeSwitcher />
                    <Text title={t('Изменить цветовую схему')} size="s" />
                </HStack>
            </VStack>
        </Page>
    );
};

export default SettingsPage;
