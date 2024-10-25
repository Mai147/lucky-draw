import React from "react";

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: any;
};

const Input: React.FC<InputProps> = ({ onChange, value }) => {
    return (
        <input
            type="text"
            className="border-[#eb91a3] border-2 outline-none rounded-sm shadow-lg py-1 w-full md:w-60 px-3 text-lg bg-white"
            onChange={onChange}
            value={value}
        />
    );
};
export default Input;
