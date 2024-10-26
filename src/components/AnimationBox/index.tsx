import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import { useTheme } from "../../contexts/ThemeContext";

type AnimationBoxProps = {
    value: number;
};

const AnimationBox: React.FC<AnimationBoxProps> = ({ value }) => {
    const { theme, styles } = useTheme();
    return (
        <div
            className={`rounded-xl border-[0.5rem] ${styles[theme].numberBoxOutterBackground} ${styles[theme].numberBoxOutterBorder}`}
            style={{
                boxShadow: styles[theme].numberBoxShadow,
            }}
        >
            <div
                className={`rounded-xl p-1 shadow-sm text-[58px] sm:text-[80px] ${styles[theme].numberBoxColor} ${styles[theme].numberBoxInnerBorder} ${styles[theme].numberBoxInnerBackground}`}
            >
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
                        backgroundColor: styles[theme].animatedBoxBackground,
                        paddingLeft: 48,
                        paddingRight: 48,
                        paddingTop: 14,
                        paddingBottom: 14,
                        border: `0.25rem solid ${styles[theme].animatedBoxBorder}`,
                        borderRadius: "16px",
                        fontFamily: "'Spicy Rice', serif",
                        textShadow: styles[theme].numberBoxTextShadow,
                    }}
                />
            </div>
        </div>
    );
};
export default AnimationBox;
