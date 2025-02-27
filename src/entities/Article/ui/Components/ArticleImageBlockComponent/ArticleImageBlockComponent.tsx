import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import clsx from 'clsx';

import { Text } from '@/shared/ui/redesigned/Text';

import { ArticleImageBlock } from '../../../model/types/article';

import cls from './ArticleImageBlockComponent.module.scss';
import { API_URL } from '@/shared/api/api';

type Props = {
    className?: string;
    block: ArticleImageBlock;
};

export const ArticleImageBlockComponent = memo(
    ({ className, block }: Props) => {
        const { t } = useTranslation();

        return (
            <div className={clsx(cls.ArticleImageBlockComponent, className)}>
                <img
                    src={`${API_URL}/${block.data.file.url}`}
                    alt={block.data.title}
                    className={cls.img}
                />
                {block.data.title && (
                    <Text text={block.data.title} align="center" />
                )}
            </div>
        );
    },
);
