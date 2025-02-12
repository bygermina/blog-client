import { PropsWithChildren, Suspense } from 'react';

import { Modal } from '@/shared/ui/redesigned/Modal';
import { Loader } from '@/shared/ui/deprecated/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({
    className,
    isOpen,
    onClose,
    children,
}: PropsWithChildren<LoginModalProps>) => (
    <Modal className={className} isOpen={isOpen} onClose={onClose} lazy>
        <Suspense fallback={<Loader />}>{children}</Suspense>
    </Modal>
);
