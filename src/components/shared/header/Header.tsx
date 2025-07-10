"use client";
import Sidebar from "@/components/shared/sidebar/Sidebar";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import Image from "next/image";
import React from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import SidebarToggler from "@/components/ui/SidebarToggler";

const Header = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <header className="w-full items-center sticky top-0 right-0">
      <div
        className="w-full bg-white/90 flex-between-center p-3
       backdrop-blur-sm dark:bg-zinc-900/90 "
      >
        <div className="flex-center gap-2">
          <Sidebar />

          <SidebarToggler className={`${isOpen ? "w-0 opacity-0" : ""}`} />

          <Image
            src={"/binam-logo.svg"}
            className="w-8 lg:w-10"
            width={40}
            height={32}
            alt="هوش مصنوعی تولید محتوا"
          />

          <span className="font-semibold text-xl lg:text-2xl">بینام</span>
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
