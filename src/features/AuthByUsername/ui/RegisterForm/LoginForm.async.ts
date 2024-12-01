import { FC, lazy } from 'react';
import { LoginFormProps } from './RegisterForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () => import('./RegisterForm'),
);
