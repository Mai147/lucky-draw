import { useEffect, useRef, useState } from "react";
import { isValidInteger } from "./util/StringUtil";
import Header from "./components/Header";
import Range from "./components/Range";
import NumberBox from "./components/NumberBox";
import ConfettiExplosion from "react-confetti-explosion";
import AnimationBox from "./components/AnimationBox";
import CountDownText from "./components/CountDownText";
import RefreshButton from "./components/RefreshButton";
import ThemeModal from "./components/Modal/ThemeModal";
import AppConfig from "./config";
function App() {
    const [num, setNum] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [display, setDisplay] = useState(false);
    const [seconds, setSeconds] = useState<number | null>(null);
    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(AppConfig.DEFAULT_MAX_VALUE);
    const startAudioRef = useRef<HTMLAudioElement>(null);
    const endAudioRef = useRef<HTMLAudioElement>(null);
    const [isOpenThemeModal, setIsOpenThemeModal] = useState<boolean>(false);
    const randomRange = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const handleClick = () => {
        if (startAudioRef.current) {
            startAudioRef.current.currentTime = 0;
            startAudioRef.current
                .play()
                .then(() => {})
                .catch((err: any) => console.log(err));
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
                    endAudioRef.current
                        .play()
                        .then(() => {})
                        .catch((err) => console.log(err));
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
        <>
            <ThemeModal
                isOpen={isOpenThemeModal}
                onClose={() => setIsOpenThemeModal(false)}
            />
            <Header openThemeModal={() => setIsOpenThemeModal(true)} />
            <Range
                minValue={minValue}
                maxValue={maxValue}
                handleMinValueChange={handleMinValueChange}
                handleMaxValueChange={handleMaxValueChange}
            />
            <audio
                ref={startAudioRef}
                src={`${process.env.PUBLIC_URL}/audio/sound1.mp3`}
            ></audio>
            <audio
                ref={endAudioRef}
                src={`${process.env.PUBLIC_URL}/audio/sound2.mp3`}
            />
            <div className="flex-1 flex flex-col justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center flex-1">
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
                        {/* {<AnimationBox value={num} />} */}
                        {!disabled && <NumberBox value={num} />}
                        {seconds != null && <CountDownText seconds={seconds} />}
                    </div>
                </div>
                <RefreshButton disabled={disabled} handleClick={handleClick} />
            </div>
        </>
    );
}

export default App;
