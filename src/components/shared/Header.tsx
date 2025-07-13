"use client"
import React from "react"
import { useSelector } from "react-redux"
import SidebarOverlay from "./sidebar/SidebarOverlay"
import Sidebar from "@/components/shared/sidebar/Sidebar"
import ThemeSwitcher from "@/components/ui/ThemeSwitcher"
import { RootState } from "@/store/store"
import SidebarToggler from "@/components/shared/sidebar/SidebarToggler"
import Logo from "@/components/ui/Logo"
import UserAvatarDropbar from "@/components/ui/UserAvatarDropbar"

const Header = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen)

  return (
    <header
      className={
        `w-full items-center sticky top-0 right-0 z-50
    `
      }
    >
      <SidebarOverlay />

      <Sidebar />

      <div
        className={
          `w-full bg-white/90 flex-between-center p-3
        backdrop-blur-sm dark:bg-zinc-900/90 transition-all 
        duration-300 z-998 ${isOpen ? "lg:pr-[260px]" : ""}`
        }
      >
        <div
          className={`flex-center gap-2 ${isOpen ? "lg:w-0 lg:opacity-0" : ""}`}
        >
          <SidebarToggler />

          <Logo />
        </div>

        <div className="flex-center justify-end gap-3">
          <UserAvatarDropbar />

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header