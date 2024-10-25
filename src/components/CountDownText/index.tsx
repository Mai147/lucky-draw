import React from "react";

type CountDownTextProps = { seconds: number };

const CountDownText: React.FC<CountDownTextProps> = ({ seconds }) => {
    return (
        <span className="font-['Spicy_Rice',serif] text-8xl text-[#81C4EE] opacity-80 mb-2">
            {seconds}
        </span>
    );
};
export default CountDownText;
