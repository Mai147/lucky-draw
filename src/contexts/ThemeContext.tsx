import { createContext, useContext, useEffect, useState } from "react";
import { ThemeName, themeStyles, ThemeStyles } from "../constants/Theme/Theme";
import AppConfig from "../config";

type ContextState = {
    theme: ThemeName;
    styles: ThemeStyles;
    toggleTheme: (theme: ThemeName) => void;
};

const defaultContextState: ContextState = {
    theme: AppConfig.DEFAULT_THEME,
    styles: themeStyles,
    toggleTheme(theme) {},
};

const ThemeContext = createContext<ContextState>(defaultContextState);

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState<ThemeName>(AppConfig.DEFAULT_THEME);

    useEffect(() => {
        // TODO: Reset localstorage to apply default theme
        localStorage.removeItem("theme");
        // TODO: Temporary comment
        // const savedTheme: ThemeName = (localStorage.getItem("theme") ||
        //     AppConfig.DEFAULT_THEME) as ThemeName;
        const savedTheme: ThemeName = AppConfig.DEFAULT_THEME as ThemeName;
        setTheme(savedTheme);
    }, []);

    const toggleTheme = (theme: ThemeName) => {
        setTheme(theme);
        // TODO: Temporary comment
        // localStorage.setItem("theme", theme.toString());
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
                styles: themeStyles,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
