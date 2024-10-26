import React from "react";
import NumberBoxItem from "./NumberBoxItem";
import { splitNumber } from "../../util/StringUtil";
import { useTheme } from "../../contexts/ThemeContext";

type NumberBoxProps = {
    value: number;
};

const NumberBox: React.FC<NumberBoxProps> = ({ value }) => {
    const numberArray = splitNumber(value);
    const { styles, theme } = useTheme();
    return (
        <div
            className={`rounded-xl border-[0.5rem] ${styles[theme].numberBoxOutterBackground} ${styles[theme].numberBoxOutterBorder}`}
            style={{
                boxShadow: styles[theme].numberBoxShadow,
            }}
        >
            <div
                className={`${styles[theme].numberBoxInnerBackground} rounded-xl p-1 shadow-sm flex`}
            >
                {numberArray.map((val, index) => (
                    <NumberBoxItem key={`${val}${index}`} value={val} />
                ))}
            </div>
        </div>
    );
};
export default NumberBox;
