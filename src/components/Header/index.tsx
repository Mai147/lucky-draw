import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";

type HeaderProps = {
    openThemeModal: () => void;
};

const Header: React.FC<HeaderProps> = ({ openThemeModal }) => {
    const { styles, theme } = useTheme();
    return (
        // <div
        //     className={`h-28 sm:h-36 flex flex-col justify-center items-center text-4xl sm:text-5xl md:text-6xl font-['Danfo',serif] ${styles[theme].headerColor}`}
        // >
        <div
            className={`min-h-28 sm:min-h-36 w-full flex flex-col justify-between items-end text-4xl sm:text-5xl md:text-6xl font-["Itim",cursive]`}
        >
            <div className="cursor-pointer" onClick={openThemeModal}>
                <MdOutlineDarkMode
                    className={`text-4xl sm:text-5xl ${styles[theme].headerIconColor}`}
                />
            </div>
            <div className="flex flex-1 w-full justify-center items-center">
                <span
                    className={`text-center ${styles[theme].headerColor}`}
                    style={{
                        textShadow: styles[theme].headerTextShadowColor,
                    }}
                >
                    THANH GƯƠM ĐỊNH MỆNH
                </span>
            </div>
        </div>
    );
};
export default Header;
