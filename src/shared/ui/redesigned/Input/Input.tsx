import React, {
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    memo,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import clsx from 'clsx';

import { HStack } from '../Stack';
import { Text } from '../Text';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface BaseInput extends Omit<HTMLInputProps, 'type' | 'onChange'> {
    className?: string;
    value?: string | number;
    label?: string;
    autofocus?: boolean;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    size?: InputSize;
}

interface FileInputProps extends BaseInput {
    type: 'file';
    onChange?: (value: FormData) => void;
}

interface InputProps extends BaseInput {
    type: Exclude<HTMLInputTypeAttribute, 'file'>;
    onChange?: (value: string) => void;
}

export const Input = memo(
    ({
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        size = 'm',
        ...otherProps
    }: InputProps | FileInputProps) => {
        const ref = useRef<HTMLInputElement>(null);
        const [isFocused, setIsFocused] = useState(false);

        useEffect(() => {
            if (autofocus) {
                setIsFocused(true);
                ref.current?.focus();
            }
        }, [autofocus]);

        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (type === 'file') {
                const file = e.target.files?.[0];

                if (file) {
                    const formData = new FormData();
                    formData.append('image', file);

                    (onChange as (value: FormData) => void)?.(formData);
                }
            } else {
                (onChange as (value: string) => void)?.(e.target.value);
            }
        };

        const onBlur = () => {
            setIsFocused(false);
        };

        const onFocus = () => {
            setIsFocused(true);
        };

        const input = (
            <div
                className={clsx(
                    cls.InputWrapper,
                    {
                        [cls.readonly]: readonly,
                        [cls.focused]: isFocused,
                        [cls.withAddonLeft]: Boolean(addonLeft),
                        [cls.withAddonRight]: Boolean(addonRight),
                    },
                    className,
                    cls[size],
                )}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                <input
                    {...otherProps}
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    readOnly={readonly}
                    placeholder={placeholder}
                />
                <div className={cls.addonRight}>{addonRight}</div>
            </div>
        );

        if (label) {
            return (
                <HStack max gap="8">
                    <Text text={label} />
                    {input}
                </HStack>
            );
        }

        return input;
    },
);
