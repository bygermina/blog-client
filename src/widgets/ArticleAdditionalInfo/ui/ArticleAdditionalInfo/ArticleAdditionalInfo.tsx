import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { User } from '@/entities/User';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';

import cls from './ArticleAdditionalInfo.module.scss';

type Props = {
    className?: string;
    author?: User;
    createdAt?: string;
    views?: number;
    onEdit: () => void;
};

export const ArticleAdditionalInfo = memo(
    ({ className, author, createdAt, views, onEdit }: Props) => {
        const { t } = useTranslation();

        return (
            <VStack
                gap="32"
                className={clsx(cls.ArticleAdditionalInfo, className)}
            >
                {/* <HStack gap="8">
                    <Avatar src={author?.avatar} size={32} />
                    <Text text={author.username} bold />
                    <Text text={createdAt} />
                </HStack> */}
                <Button onClick={onEdit}>{t('Редактировать')}</Button>
                {/* <Text text={t('{{count}} просмотров', { count: views })} /> */}
            </VStack>
        );
    },
);
