import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from '@/shared/ui/redesigned/Button';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

import { getCanEditArticle } from '../../model/selectors/article';

type Props = {
    className?: string;
};

export const ArticleDetailsPageHeader = memo(({ className }: Props) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article, navigate]);

    return (
        <HStack max justify="between" className={className}>
            <Button variant="outline" onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button variant="outline" onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
});
