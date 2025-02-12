import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div
            data-testid="NotFoundPage"
            className={clsx(cls.NotFoundPage, className)}
        >
            {t('Страница не найдена')}
        </div>
    );
};
