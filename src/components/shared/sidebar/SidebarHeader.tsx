import React from "react"
import Logo from "@/components/ui/Logo"
import SidebarToggler from "@/components/shared/sidebar/SidebarToggler"

const SidebarHeader = () => {
  return (
    <div className="flex-between-center p-1">
      <Logo />

      <SidebarToggler />
    </div>
  )
}

export default SidebarHeader