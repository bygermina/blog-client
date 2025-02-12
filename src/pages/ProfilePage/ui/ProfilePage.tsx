import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    return (
        <Page data-testid="ProfilePage" className={className}>
            <VStack gap="16" max>
                <EditableProfileCard />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
