import { memo } from 'react';
import clsx from 'clsx';

import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
    className?: string;
    title?: string | JSX.Element;
    text?: string | JSX.Element;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const Html = memo(
    ({
        className,
        text,
        title,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold,
        'data-testid': dataTestId = 'Text',
    }: TextProps) => {
        const HeaderTag = mapSizeToHeaderTag[size];
        const sizeClass = mapSizeToClass[size];

        return (
            <div
                className={clsx(
                    cls.Text,
                    { [cls.bold]: bold },
                    className,
                    cls[variant],
                    cls[align],
                    sizeClass,
                )}
            >
                {title && (
                    <div
                        className={cls.title}
                        data-testid={`${dataTestId}.Header`}
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: title.toString(),
                        }}
                    />
                )}
                {text && (
                    <div
                        className={cls.text}
                        data-testid={`${dataTestId}.Paragraph`}
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: text.toString(),
                        }}
                    />
                )}
            </div>
        );
    },
);
