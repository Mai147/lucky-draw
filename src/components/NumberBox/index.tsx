import React from "react";
import NumberBoxItem from "./NumberBoxItem";
import { splitNumber } from "../../util/StringUtil";

type NumberBoxProps = {
    value: number;
};

const NumberBox: React.FC<NumberBoxProps> = ({ value }) => {
    const numberArray = splitNumber(value);
    return (
        <div
            className="rounded-xl border-[0.5rem] border-white bg-white"
            style={{
                boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
        >
            <div className="bg-[#FDDEE4] rounded-xl p-1 shadow-sm flex">
                {numberArray.map((val, index) => (
                    <NumberBoxItem key={`${val}${index}`} value={val} />
                ))}
            </div>
        </div>
    );
};
export default NumberBox;
