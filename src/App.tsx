import { useEffect, useRef, useState } from "react";
import { isValidInteger } from "./util/StringUtil";
import Header from "./components/Header";
import Range from "./components/Range";
import NumberBox from "./components/NumberBox";
import ConfettiExplosion from "react-confetti-explosion";
import AnimationBox from "./components/AnimationBox";
import CountDownText from "./components/CountDownText";
import RefreshButton from "./components/RefreshButton";

function App() {
    const [num, setNum] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [display, setDisplay] = useState(false);
    const [seconds, setSeconds] = useState<number | null>(null);
    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(115);
    const startAudioRef = useRef<HTMLAudioElement>(null);
    const endAudioRef = useRef<HTMLAudioElement>(null);
    const randomRange = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const handleClick = () => {
        if (startAudioRef.current) {
            startAudioRef.current.currentTime = 0;
            startAudioRef.current.play();
        }
        setDisplay(false);
        const randomNumber = randomRange(minValue, maxValue);
        setNum(randomNumber);
        setDisabled(true);
    };
    const handleMinValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value) {
            if (isValidInteger({ value, minValue: 1 })) {
                setMinValue(Number(value));
                if (Number(value) > maxValue) {
                    setMaxValue(Number(value));
                }
            }
        } else {
            setMinValue(0);
        }
    };
    const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value) {
            if (isValidInteger({ value, minValue })) {
                setMaxValue(Number(value));
            }
        } else {
            setMaxValue(minValue);
        }
    };
    useEffect(() => {
        if (disabled) {
            setSeconds(3);
            setTimeout(() => {
                if (endAudioRef.current) {
                    endAudioRef.current.currentTime = 0;
                    endAudioRef.current.play();
                }
                setDisplay(true);
            }, 3100);
            setTimeout(() => {
                setDisabled(false);
            }, 5500);
        }
    }, [disabled]);

    useEffect(() => {
        if (seconds === 0) setSeconds(null);
        if (!seconds) return;
        const intervalId = setInterval(() => {
            setSeconds((prev) => (prev ?? 0) - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [seconds]);

    return (
        <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-br from-[#FECED7] to-[#FFEFF2] p-2 sm:p-4">
            <Header />
            <Range
                minValue={minValue}
                maxValue={maxValue}
                handleMinValueChange={handleMinValueChange}
                handleMaxValueChange={handleMaxValueChange}
            />
            <audio ref={startAudioRef} src="audio/sound1.mp3" />
            <audio ref={endAudioRef} src="audio/sound2.mp3" />
            <div className="flex-1 flex flex-col justify-center items-center">
                {!disabled && (
                    <ConfettiExplosion
                        particleCount={200}
                        duration={2800}
                        colors={[
                            "#EFE6FB",
                            "#FBCFE0",
                            "#FDEF81",
                            "#B6E2FD",
                            "#ADD6AE",
                        ]}
                    />
                )}
                <div className="h-[180px] sm:h-[200px] flex flex-col justify-center items-center mb-6 sm:mb-8">
                    {display && disabled && <AnimationBox value={num} />}
                    {!disabled && <NumberBox value={num} />}
                    {seconds != null && <CountDownText seconds={seconds} />}
                </div>
                <RefreshButton disabled={disabled} handleClick={handleClick} />
            </div>
        </div>
    );
}

export default App;
