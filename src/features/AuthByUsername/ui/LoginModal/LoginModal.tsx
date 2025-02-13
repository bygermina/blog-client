import { PropsWithChildren, Suspense } from 'react';

import { Modal } from '@/shared/ui/redesigned/Modal';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

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
        <Suspense fallback={<Skeleton />}>{children}</Suspense>
    </Modal>
);
