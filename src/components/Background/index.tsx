import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

type BackgroundProps = {
    children: any;
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
    const { styles, theme } = useTheme();
    return (
        <div
            className={`flex flex-col justify-center items-center w-[100vw] h-[100vh] ${
                styles[theme]?.background ?? ""
            } bg-cover p-2 pb-28 sm:p-4 sm:pb-4`}
        >
            {children}
        </div>
    );
};
export default Background;
