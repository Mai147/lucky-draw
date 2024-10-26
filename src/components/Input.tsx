import React from "react";
import { useTheme } from "../contexts/ThemeContext";

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: any;
};

const Input: React.FC<InputProps> = ({ onChange, value }) => {
    const { styles, theme } = useTheme();
    return (
        <input
            type="text"
            className={`${styles[theme].inputBackground} ${styles[theme].inputTextColor} ${styles[theme].inputBorderColor} border-2 outline-none rounded-sm py-1 w-full md:w-60 px-3 text-lg`}
            onChange={onChange}
            value={value}
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 2px 4px, rgba(0, 0, 0, 0.23) 0px 2px 4px",
            }}
        />
    );
};
export default Input;
