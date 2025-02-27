import { useEffect } from 'react';

// eslint-disable-next-line prefer-destructuring
const PROJECT = process.env.PROJECT;

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (PROJECT !== 'storybook' && PROJECT !== 'jest') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
