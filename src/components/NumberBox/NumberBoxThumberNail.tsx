import React from "react";
import { splitNumber } from "../../util/StringUtil";
import { useTheme } from "../../contexts/ThemeContext";
import NumberBoxItemThumbnail from "./NumberBoxItemThumbnail";
import { ThemeName } from "../../constants/Theme/Theme";

type NumberBoxThumberNailProps = {
    value: number;
    theme: ThemeName;
};

const NumberBoxThumberNail: React.FC<NumberBoxThumberNailProps> = ({
    value,
    theme,
}) => {
    const numberArray = splitNumber(value);
    const { styles } = useTheme();
    return (
        <div
            className={`rounded-xl border-[0.25rem]
                ${styles[theme].numberBoxOutterBackground} ${styles[theme].numberBoxOutterBorder}`}
            style={{
                boxShadow: styles[theme].numberBoxShadow,
            }}
        >
            <div
                className={`${styles[theme].numberBoxInnerBackground} rounded-xl p-1 shadow-sm flex`}
            >
                {numberArray.map((val, index) => (
                    <NumberBoxItemThumbnail
                        key={`${val}${index}`}
                        value={val}
                        theme={theme}
                    />
                ))}
            </div>
        </div>
    );
};
export default NumberBoxThumberNail;
