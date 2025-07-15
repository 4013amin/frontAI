import React from "react"

function EmptySiteList() {
  return (
    <div className="w-full flex items-center justify-center flex-col my-12">
      <h2 className="text-center font-semibold">
        هنوز سایتی اضافه نکرده‌اید
      </h2>

      <p className="text-sm text-center text-zinc-500 mt-2"> از فرم کنار برای افزودن اولین سایت خود استفاده کنید </p>
    </div>
  )
}

export default EmptySiteList