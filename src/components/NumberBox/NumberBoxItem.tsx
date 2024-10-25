import React from "react";

type NumberBoxItemProps = {
    value: number;
};

const NumberBoxItem: React.FC<NumberBoxItemProps> = ({ value }) => {
    return (
        <div
            className="pl-[48px] pr-[48px] pt-[14px] pb-[14px] border-[0.25rem] border-[#FDDEE4] font-['Spicy_Rice',serif] text-[58px] sm:text-[80px] text-[#D2B5D3] rounded-[16px] bg-white"
            style={{
                textShadow: "2px 4px 3px rgba(170, 125, 135, 1)",
            }}
        >
            <span className="inline-block w-[35.475px] sm:w-[48.95px]">
                {value}
            </span>
        </div>
    );
};
export default NumberBoxItem;
