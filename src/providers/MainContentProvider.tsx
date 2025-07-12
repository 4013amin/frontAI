"use client"
import React, { ReactNode } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

const MainContentProvider = ({ children }: { children: ReactNode }) => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen)
  return (
    <div
      className={
        ` transition-all duration-300 container
      mx-auto ${isOpen ? "lg:pr-[260px]" : ""}`
      }
    >
      {children}
    </div>
  )
}

export default MainContentProvider