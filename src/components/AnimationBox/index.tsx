import React from "react";
import AnimatedNumbers from "react-animated-numbers";

type AnimationBoxProps = {
    value: number;
};

const AnimationBox: React.FC<AnimationBoxProps> = ({ value }) => {
    return (
        <div
            className="rounded-xl border-[10px] border-white bg-white"
            style={{
                boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
        >
            <div className="bg-[#FDDEE4] rounded-xl p-1 shadow-sm text-[58px] sm:text-[80px]">
                <AnimatedNumbers
                    includeComma={false}
                    transitions={(index) => {
                        return {
                            type: "spring",
                            duration: index + 0.3,
                        };
                    }}
                    animateToNumber={value}
                    fontStyle={{
                        backgroundColor: "white",
                        color: "#D2B5D3",
                        paddingLeft: 48,
                        paddingRight: 48,
                        paddingTop: 14,
                        paddingBottom: 14,
                        border: "0.25rem solid #FDDEE4",
                        borderRadius: "16px",
                        fontFamily: "'Spicy Rice', serif",
                        textShadow: "2px 4px 3px rgba(170, 125, 135, 1)",
                    }}
                />
            </div>
        </div>
    );
};
export default AnimationBox;
