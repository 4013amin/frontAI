"use client"
import React, { useState } from "react"
import Image from "next/image"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CreateTitleForm from "@/components/sections/create-title/CreateTitleForm"
import SelectTitleForm from "@/components/sections/create-title/SelectTitleForm"

const breadcrumbItems = [
  { title: "مقالات", link: "/panel/articles" },
  { title: "پیشنهاد عنوان", isCurrent: true }
]

function Page() {
  const [titles, setTitels] = useState<string | string[]>("")
  const [tags, setTags] = useState<string>("")

  // eslint-disable-next-line no-console
  console.log(titles, tags)

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex-center w-full">
        <Image
          src="/create-title-min.png"
          width={800}
          height={800}
          alt="تولید کننده هوشمند عنوان"
          className="w-44"
        />
      </div>

      <div 
        className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-3 mb-16 max-w-3xl mx-auto"
      >
        {
          !titles.length
            ? (
              <CreateTitleForm setTags={setTags} setTitles={setTitels}  />
            )
            : (
              <SelectTitleForm />
            )
        }
      </div>
      
    </div>
  )
}

export default Page