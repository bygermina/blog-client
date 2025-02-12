import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import clsx from 'clsx';

import { Text } from '@/shared/ui/redesigned/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

import { loginReducer } from '../../model/slice/loginSlice';
import { registerByUsername } from '../../model/services/register/register';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const RegisterForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const forceUpdate = useForceUpdate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onRegister = useCallback(async () => {
        const result = await dispatch(
            registerByUsername({ username, password }),
        );

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            forceUpdate();
        }
    }, [dispatch, forceUpdate, onSuccess, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <VStack gap="16" className={clsx(cls.LoginForm, className)}>
                <Text title={t('Форма регистрации')} />
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите username')}
                    onChange={setUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={setPassword}
                    value={password}
                />
                <Button
                    className={cls.loginBtn}
                    onClick={onRegister}
                    // disabled={isLoading}
                >
                    {t('Регистрация')}
                </Button>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default RegisterForm;
