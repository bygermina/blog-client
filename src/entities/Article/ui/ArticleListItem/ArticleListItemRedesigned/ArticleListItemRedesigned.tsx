import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import dayjs from 'dayjs';

import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import { Html } from '@/shared/ui/redesigned/Html/Html';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

import {
    ArticleBlockType,
    ArticleView,
} from '../../../model/consts/articleConsts';
import { ArticleListItemProps } from '../ArticleListItem';
import { ArticleTextBlock } from '../../../model/types/article';

import cls from './ArticleListItemRedesigned.module.scss';

const highlightText = (text: string, searchTerm?: string): string => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);

    return parts
        .map((part) =>
            regex.test(part)
                ? `<span style="background-color: yellow;">${part}</span>`
                : part,
        )
        .join('');
};

export const ArticleListItemRedesigned = memo(
    ({ className, article, view, target, search }: ArticleListItemProps) => {
        const { t } = useTranslation();

        if (!article.id) {
            return null;
        }

        const userInfo = (
            <>
                <Avatar
                    size={32}
                    src={article.user?.avatar}
                    className={cls.avatar}
                />
                <Text bold text={article.user?.username} />
            </>
        );

        const views = (
            <div>
                <HStack gap="8">
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article.views)} className={cls.views} />
                </HStack>
            </div>
        );

        if (view === ArticleView.BIG) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT,
            ) as unknown as ArticleTextBlock;

            return (
                <Card
                    padding="24"
                    max
                    data-testid="ArticleListItem"
                    className={clsx(cls.ArticleListItem, className, cls[view])}
                >
                    <VStack max gap="16">
                        <HStack gap="8" max>
                            {userInfo}
                            <Text
                                text={dayjs(article.createdAt).format(
                                    'DD MMMM YYYY',
                                )}
                            />
                        </HStack>
                        <Html
                            title={highlightText(article.title, search)}
                            bold
                        />
                        <Html
                            title={highlightText(article.subtitle, search)}
                            size="s"
                        />
                        <AppImage
                            fallback={<Skeleton width="100%" height={250} />}
                            src={`${__API__}/${article.img}`}
                            className={cls.img}
                            alt={article.title}
                        />
                        {textBlock?.data.text && (
                            <Html
                                className={cls.textBlock}
                                text={highlightText(
                                    textBlock.data.text,
                                    search,
                                )}
                            />
                        )}
                        <HStack max justify="between">
                            <AppLink
                                target={target}
                                to={getRouteArticleDetails(article.id)}
                            >
                                <Button variant="outline">
                                    {t('Читать далее...')}
                                </Button>
                            </AppLink>
                            {views}
                        </HStack>
                    </VStack>
                </Card>
            );
        }

        return (
            <AppLink
                data-testid="ArticleListItem"
                target={target}
                to={getRouteArticleDetails(article.id)}
                className={clsx(cls.ArticleListItem, className, cls[view])}
            >
                <Card className={cls.card} border="partial" padding="0">
                    <AppImage
                        fallback={<Skeleton width="100%" height={200} />}
                        alt={article.title}
                        src={`${__API__}/${article.img}`}
                        className={cls.img}
                    />
                    <VStack className={cls.info} gap="4">
                        <Text title={article.title} className={cls.title} />
                        <VStack gap="4" className={cls.footer} max>
                            <HStack justify="between" max>
                                <Text
                                    text={article.createdAt}
                                    className={cls.date}
                                />
                                {views}
                            </HStack>
                            <HStack gap="4">{userInfo}</HStack>
                        </VStack>
                    </VStack>
                </Card>
            </AppLink>
        );
    },
);
