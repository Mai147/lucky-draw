import React from "react";

type RefreshButtonProps = {
    disabled: boolean;
    handleClick: () => void;
};

const RefreshButton: React.FC<RefreshButtonProps> = ({
    disabled,
    handleClick,
}) => {
    return (
        <button
            className={`${disabled ? "bg-gray-400" : "bg-[#ECACBB]"} ${
                disabled ? "" : "hover:bg-[#F19FB2]"
            } transition-all px-8 py-2 rounded-sm text-white shadow-md font-["Exo",serif]`}
            onClick={handleClick}
            disabled={disabled}
        >
            Refresh
        </button>
    );
};
export default RefreshButton;
