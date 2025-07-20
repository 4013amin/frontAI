import React from "react"
import Image from "next/image"
import Breadcrumb from "@/components/ui/Breadcrumb"

const breadcrumbItems = [
  { title: "مقالات", link: "/panel/articles" },
  { title: "پیشنهاد عنوان", isCurrent: true }
]

function page() {

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex-center w-full">
        <Image
          src="/create-title-min.png"
          width={800}
          height={800}
          alt="تولید کننده هوشمند عنوان"
          className="w-54"
        />
      </div>
      
    </div>
  )
}

export default page