"use client";
import React, { useEffect } from "react";
import useOtpTimer from "./useOtpTimer";
import Link from "next/link";
import { PencilLine } from "lucide-react";

const OtpTimer = () => {
  const {
    timeRemaining,
    isTimerComplete,
    isTimerRunning,
    startTimer,
    formatTime,
    resetTimer,
  } = useOtpTimer();

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div>
      <div className="flex-center flex-col">
        {isTimerRunning && (
          <span className="text-sm text-slate-500 mb-3 ">
            {formatTime()} ثانیه تا ارسال مجدد
          </span>
        )}

        {isTimerRunning && isTimerComplete && (
          <Button
            type="submit"
            className="max-w-[380px] w-full bg-blue-500"
            size="lg"
            disabled={isPending}
          >
            {isPending ? <Loader2Icon className="animate-spin" /> : text}
          </Button>
        )}

        <Link
          href={"/auth/login"}
          className="font-sm text-blue-500 flex-center gap-3"
        >
          <PencilLine />
          ویراش شماره تلفن
        </Link>
      </div>
    </div>
  );
};

export default OtpTimer;
