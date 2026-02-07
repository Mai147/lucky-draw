import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

type RefreshButtonProps = {
    disabled: boolean;
    handleClick: () => void;
};

const RefreshButton: React.FC<RefreshButtonProps> = ({
    disabled,
    handleClick,
}) => {
    const { styles, theme } = useTheme();
    return (
        <button
            className={`${
                disabled ? "bg-gray-400" : styles[theme].buttonBackground
            } ${
                disabled ? "" : styles[theme].buttonBackgroundHover
            } transition-all px-8 py-2 rounded-sm text-white shadow-md font-["Exo",serif] font-bold w-full sm:w-[180px]`}
            onClick={handleClick}
            disabled={disabled}
        >
            Refresh
        </button>
    );
};
export default RefreshButton;
