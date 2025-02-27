import { useEffect } from 'react';

const { PROJECT } = process.env;

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (PROJECT !== 'storybook' && PROJECT !== 'jest') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
