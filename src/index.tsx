import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { StoreProvider } from '@/app/providers/StoreProvider';
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import App from '@/app/App';

import './shared/config/i18n/i18n';

import '@/app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение',
    );
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <HelmetProvider>
                        <App />
                    </HelmetProvider>
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
