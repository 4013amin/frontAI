"use client"
import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"


const CreateArticleMain = () => {
  const selectedTitle = useSelector((state: RootState) => state.userInfo.selectedArticleTitle)
  return (
    <div>{selectedTitle}</div>
  )
}

export default CreateArticleMain