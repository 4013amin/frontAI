"use client"

import React, { useState } from "react"
import CreateTitleForm from "./CreateTitleForm"
import SelectTitleForm from "./SelectTitleForm"

export default function CreateTitleMain() {
  const [titles, setTitles] = useState<string[]>([])
  const [tags, setTags] = useState<string>("")

  return (
    <>
      {
        !titles.length
          ? (
            <CreateTitleForm setTags={setTags} setTitles={setTitles} />
          )
          : (
            <SelectTitleForm tags={tags} titles={titles} setTitles={setTitles} />
          )
      }
    </>
  )
}