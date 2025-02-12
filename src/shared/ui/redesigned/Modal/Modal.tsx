import React, { ReactNode } from 'react';
import clsx from 'clsx';

import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const { theme } = useTheme();

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={clsx(
                    cls.Modal,
                    {
                        [cls.opened]: isOpen,
                        [cls.isClosing]: isClosing,
                    },
                    className,
                    theme,
                    'app_modal',
                    cls.modalNew,
                )}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
