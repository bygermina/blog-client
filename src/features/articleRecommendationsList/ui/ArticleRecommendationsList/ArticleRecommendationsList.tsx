import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { useArticleRecommendationsList } from '../../api/aritcleRecommendationsApi';

type Props = {
    className?: string;
};

export const ArticleRecommendationsList = memo(({ className }: Props) => {
    const { t } = useTranslation();
    const {
        isLoading,
        data: articles,
        error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack
            data-testid="ArticleRecommendationsList"
            gap="8"
            className={className}
        >
            <Text size="l" title={t('Рекомендуем')} />
            <ArticleList articles={articles} target="_blank" />
        </VStack>
    );
});
