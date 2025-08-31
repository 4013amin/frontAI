// components/DailyProgress.tsx
import React from "react"

type ProgressProps = {
  daily_limit: number
  articles_used_today: number
}

const DailyProgress: React.FC<ProgressProps> = ({ daily_limit, articles_used_today }) => {
  const remaining_today = daily_limit - articles_used_today

  const progress = Math.min(((daily_limit - remaining_today) / daily_limit) * 100, 100)

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-2 text-xl font-semibold flex gap-2 text-gray-800 dark:text-gray-200">
        {daily_limit - remaining_today}

        / 

        {daily_limit}
      </div>

      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={
            `h-full transition-all duration-500 ${
              remaining_today === 0
                ? "bg-gradient-to-r from-blue-600 to-blue-300"
                : "bg-blue-500"
            }`
          }
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  )
}

export default DailyProgress