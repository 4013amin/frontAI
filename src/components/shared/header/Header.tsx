"use client";
import Sidebar from "@/components/shared/sidebar/Sidebar";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import React from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import SidebarToggler from "@/components/ui/SidebarToggler";
import Logo from "@/components/ui/Logo";

const Header = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <header className={`w-full items-center sticky top-0 right-0
    `}>
      <Sidebar />
      <div
        className={`w-full bg-white/90 flex-between-center p-3
        backdrop-blur-sm dark:bg-zinc-900/90 transition-all 
        duration-300 z-998 ${isOpen ? "lg:pr-[260px] " : ""}`}
      >
        <div className={`flex-center gap-2 ${isOpen ? "lg:w-0 lg:opacity-0" : ""}`}>

          <SidebarToggler 
            className="hidden lg:!block"
           />

          <Logo />
          
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
