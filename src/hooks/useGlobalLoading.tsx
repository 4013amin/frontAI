"use client"

import React, { createContext, useContext, useState } from "react"
import LoadingOverlay from "@/components/ui/LoadingOverlay"

type LoadingContextType = {
  showLoading: (message?: string) => void
  hideLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const useGlobalLoading = () => {
  const context = useContext(LoadingContext)
  if (!context) throw new Error("useGlobalLoading must be used inside LoadingProvider")
  return context
}

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("در حال پردازش...")

  const showLoading = (msg?: string) => {
    if (msg) setMessage(msg)
    setIsLoading(true)
  }

  const hideLoading = () => {
    setIsLoading(false)
    setMessage("در حال پردازش...")
  }

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading }}>
      {children}

      {isLoading && <LoadingOverlay message={message} />}
    </LoadingContext.Provider>
  )
}