import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeName } from "../../constants/Theme/Theme";

type NumberBoxItemThumbnailProps = {
    value: number;
    theme: ThemeName;
};

const NumberBoxItemThumbnail: React.FC<NumberBoxItemThumbnailProps> = ({
    value,
    theme,
}) => {
    const { styles } = useTheme();
    return (
        <div
            className={`pl-[24px] pr-[24px] pt-[7px] pb-[7px] border-[0.05rem] ${styles[theme].numberBoxInnerBorder} font-['Spicy_Rice',serif] text-[36px] ${styles[theme].numberBoxColor} rounded-[8px] ${styles[theme].numberBoxBackground}`}
            style={{
                textShadow: styles[theme].numberBoxTextShadow,
            }}
        >
            <span className="inline-block">{value}</span>
        </div>
    );
};
export default NumberBoxItemThumbnail;
