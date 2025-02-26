import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { Code } from '@/shared/ui/redesigned/Code';

import { ArticleCodeBlock } from '../../model/types/article';

import cls from './ArticleCodeBlockComponent.module.scss';

type Props = {
    className?: string;
    block: ArticleCodeBlock;
};

export const ArticleCodeBlockComponent = ({ className, block }: Props) => {
    const { t } = useTranslation();

    return (
        <div className={clsx(cls.ArticleCodeBlockComponent, className)}>
            <Code text={block.data.code} />
        </div>
    );
};
