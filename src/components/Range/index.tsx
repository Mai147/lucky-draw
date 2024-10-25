import React from "react";
import Input from "../Input";

type RangeProps = {
    minValue: number;
    maxValue: number;
    handleMinValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMaxValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Range: React.FC<RangeProps> = ({
    minValue,
    maxValue,
    handleMinValueChange,
    handleMaxValueChange,
}) => {
    return (
        <div className="flex flex-col sm:flex-row justify-center w-full">
            <div className="flex flex-col items-start mx-2 sm:mx-4 my-2 sm:my-0">
                <span className="font-['Exo',serif] font-semibold text-gray-700 text-xl">
                    Min:
                </span>
                <Input value={minValue} onChange={handleMinValueChange} />
            </div>
            <div className="flex flex-col items-start mx-2 sm:mx-4 my-2 sm:my-0 text-xl">
                <span className="font-['Exo',serif] font-semibold text-gray-700">
                    Max:
                </span>
                <Input value={maxValue} onChange={handleMaxValueChange} />
            </div>
        </div>
    );
};
export default Range;
