import Logo from "@/components/ui/Logo";
import SidebarToggler from "@/components/shared/sidebar/SidebarToggler";
import React from "react";

const SidebarHeader = () => {
  return (
    <div className="flex-between-center p-1">
      <Logo />
      <SidebarToggler />
    </div>
  );
};

export default SidebarHeader;
