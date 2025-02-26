import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import clsx from 'clsx';

import { Html } from '@/shared/ui/redesigned/Html/Html';

import { ArticleTextBlock } from '../../../model/types/article';

import cls from './ArticleTextBlockComponent.module.scss';

type Props = {
    className?: string;
    block: ArticleTextBlock;
};

export const ArticleTextBlockComponent = memo(({ className, block }: Props) => {
    const { t } = useTranslation();

    return (
        <div className={clsx(cls.ArticleTextBlockComponent, className)}>
            <Html title={block.data.text} className={cls.title} />
        </div>
    );
});
