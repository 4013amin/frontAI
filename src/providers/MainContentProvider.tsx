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
          mx-auto px-5 ${isOpen ? "lg:pr-[280px]" : ""}`
      }
    >
      {children}
    </div>
  )
}

export default MainContentProvider