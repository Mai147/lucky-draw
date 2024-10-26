import { createContext, useContext, useEffect, useState } from "react";
import { themeStyles, ThemeStyles } from "../constants/Theme/Theme";

export enum ThemeName {
    PINK = "pink",
    HALLOWEEN = "halloween",
}

type ContextState = {
    theme: ThemeName;
    styles: ThemeStyles;
    toggleTheme: (theme: ThemeName) => void;
};

const defaultContextState: ContextState = {
    theme: ThemeName.HALLOWEEN,
    styles: themeStyles,
    toggleTheme(theme) {},
};

const ThemeContext = createContext<ContextState>(defaultContextState);

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState<ThemeName>(ThemeName.HALLOWEEN);

    useEffect(() => {
        const savedTheme: ThemeName = (localStorage.getItem("theme") ||
            ThemeName.HALLOWEEN) as ThemeName;
        setTheme(savedTheme);
    }, []);

    const toggleTheme = (theme: ThemeName) => {
        setTheme(theme);
        localStorage.setItem("theme", theme.toString());
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