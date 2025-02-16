import { memo } from 'react';
import clsx from 'clsx';

import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

import { Notification } from '../../model/types/notification';

import cls from './NotificationItem.module.scss';

type Props = {
    className?: string;
    item: Notification;
};

export const NotificationItem = memo(({ className, item }: Props) => {
    const content = (
        <Card className={clsx(cls.NotificationItem, className)}>
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});
