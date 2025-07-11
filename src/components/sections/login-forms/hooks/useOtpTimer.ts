import { useState, useEffect } from 'react';

const useOtpTimer = (initialTime = 60) => {
    const [timeRemaining, setTimeRemaining] = useState(initialTime);
    const [isTimerComplete, setIsTimerComplete] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        if (!isTimerRunning) return;

        // Stop timer
        if (timeRemaining <= 0) {
            setIsTimerComplete(true);
            setIsTimerRunning(false);
            return;
        }

        // Create new interval
        const timer = setInterval(() => {
            setTimeRemaining((prev) => prev - 1);
        }, 1000);

        // Clear interval
        return () => clearInterval(timer);
    }, [timeRemaining, isTimerRunning]);

    // Start timer 
    const startTimer = () => {
        setIsTimerRunning(true);
        setIsTimerComplete(false);
    };

    // Reset timer
    const resetTimer = () => {
        setTimeRemaining(initialTime);
        setIsTimerComplete(false);
        setIsTimerRunning(false);
    };

    // Convertor - min seconde
    const formatTime = () => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return {
        timeRemaining,
        isTimerComplete,
        isTimerRunning,
        startTimer,
        formatTime,
        resetTimer
    };
};

export default useOtpTimer;
