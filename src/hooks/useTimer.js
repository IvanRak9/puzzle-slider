import { useState, useEffect, useCallback } from 'react';

const useTimer = (initialRunning = false) => {
    const [isRunning, setIsRunning] = useState(initialRunning);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const startTimer = useCallback(() => setIsRunning(true), []);
    const pauseTimer = useCallback(() => setIsRunning(false), []);
    const resetTimer = useCallback(() => {
        setIsRunning(false);
        setTime(0);
    }, []);

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return { time, formattedTime: formatTime(time), isRunning, startTimer, pauseTimer, resetTimer, setTime };
};

export default useTimer;