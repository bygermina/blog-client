import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

const changeTheme = {
    [Theme.DARK]: Theme.LIGHT,
    [Theme.LIGHT]: Theme.ORANGE,
    [Theme.ORANGE]: Theme.DARK,
};

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        const newTheme = theme ? changeTheme[theme] : Theme.LIGHT;

        setTheme?.(newTheme);
        saveAction?.(newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
