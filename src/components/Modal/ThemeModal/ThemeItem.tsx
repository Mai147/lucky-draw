import React from "react";
import { ThemeName, useTheme } from "../../../contexts/ThemeContext";
import { FaCheck } from "react-icons/fa";
import NumberBoxThumberNail from "../../NumberBox/NumberBoxThumberNail";

type ThemeItemProps = { thm: ThemeName; name: string; handleClose: () => void };

const ThemeItem: React.FC<ThemeItemProps> = ({ thm, name, handleClose }) => {
    const { styles, theme, toggleTheme } = useTheme();
    const handleChooseTheme = () => {
        if (theme !== thm) {
            toggleTheme(thm);
            handleClose();
        }
    };
    return (
        <div className="w-full my-3">
            <div className="flex justify-between items-center mb-1">
                <span className="text-lg text-gray-700 font-['Exo',serif]">
                    {name}
                </span>
                {theme === thm && <FaCheck color="#6bd425" size={20} />}
            </div>
            <div
                className={`w-full h-28 p-4 ${
                    styles[thm].background
                } flex items-center justify-center ${
                    theme !== thm ? "cursor-pointer" : ""
                }`}
                onClick={handleChooseTheme}
            >
                <NumberBoxThumberNail value={1} theme={thm} />
            </div>
        </div>
    );
};
export default ThemeItem;
