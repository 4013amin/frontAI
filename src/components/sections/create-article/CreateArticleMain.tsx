"use client"
import React from "react"
import CreateTitleForm from "./CreateArticleForm"
// import { useSelector } from "react-redux"
// import { RootState } from "@/store/store"


const CreateArticleMain = () => {
  // const selectedTitle = useSelector((state: RootState) => state.userInfo.selectedArticleTitle)
  return (
    <div 
      className="w-full flex justify-center items-start my-14"
    >
      <CreateTitleForm />
    </div>
  )
}

export default CreateArticleMain