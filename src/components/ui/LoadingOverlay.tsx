"use client"

import React from "react"

type Props = {
  message?: string
}

const LoadingOverlay: React.FC<Props> = ({ message = "در حال پردازش..." }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-[5px] flex items-center justify-center">
      <div
        className="bg-white dark:bg-zinc-900 rounded-2xl px-6 py-10 flex flex-col
       items-center gap-4 w-[90%] max-w-sm text-center"
      >
        <svg
          className="w-10 h-10 text-blue-500"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle
              cx="12"
              cy="12"
              r="9.5"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                dur="1.5s"
                calcMode="spline"
                values="0 150;42 150;42 150;42 150"
                keyTimes="0;0.475;0.95;1"
                keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                repeatCount="indefinite"
              />

              <animate
                attributeName="stroke-dashoffset"
                dur="1.5s"
                calcMode="spline"
                values="0;-16;-59;-59"
                keyTimes="0;0.475;0.95;1"
                keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                repeatCount="indefinite"
              />
            </circle>

            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="2s"
              values="0 12 12;360 12 12"
              repeatCount="indefinite"
            />
          </g>
        </svg>

        <p className="text-gray-800 dark:text-gray-100 font-light text-sm mt-2">{message}</p>
      </div>
    </div>
  )
}

export default LoadingOverlay