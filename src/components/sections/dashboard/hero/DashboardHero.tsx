import React from "react"

const DashboardHero = () => {
  return (
    <div className="flex items-center gap-5 flex-col pt-10">
      {/* Light video */}
      <div
        className="relative inline-block rounded-full overflow-hidden w-24"
        id="aisign-light"
      >
        <video
          src="/aisign.webm"
          autoPlay
          loop
          muted
          className="w-full h-full object-contain"
        />
      </div>

      {/* Dark video */}
      <div
        className="relative inline-block rounded-full overflow-hidden w-24"
        id="aisign-dark"
      >
        <video
          src="/aisign-dark.webm"
          autoPlay
          loop
          muted
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex items-center justify-center flex-col">
        <h1 className="font-bold text-lg">سلام علیرضا !</h1>

        <p>به داشبورد مدیریت بینام خوش آمدید.</p>
      </div>
    </div>
  )
}

export default DashboardHero