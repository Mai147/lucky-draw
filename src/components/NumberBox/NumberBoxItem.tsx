import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

type NumberBoxItemProps = {
    value: number;
};

const NumberBoxItem: React.FC<NumberBoxItemProps> = ({ value }) => {
    const { styles, theme } = useTheme();
    return (
        <div
            className={`pl-[48px] pr-[48px] pt-[14px] pb-[14px] border-[0.25rem] ${styles[theme].numberBoxInnerBorder} font-['Spicy_Rice',serif] text-[58px] sm:text-[80px] ${styles[theme].numberBoxColor} rounded-[16px] ${styles[theme].numberBoxBackground}`}
            style={{
                textShadow: styles[theme].numberBoxTextShadow,
            }}
        >
            <span className="inline-block w-[35.475px] sm:w-[48.95px]">
                {value}
            </span>
        </div>
    );
};
export default NumberBoxItem;
