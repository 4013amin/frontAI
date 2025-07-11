"use client";
import React from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import SidebarHeader from "./SidebarHeader";
import useResponsiveSidebar from "@/hooks/useResponsiveSidebar";
import Nav from "./Nav";

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  useResponsiveSidebar();

  return (
    <aside
      className={`w-[260px] h-screen absolute top-0 -right-260 fixed 
        bg-slate-100 transition-all duration-300 z-999 p-2
        dark:bg-zinc-800 ${isOpen ? "right-0" : ""}`}
    >
      <SidebarHeader />

      <Nav />
    </aside>
  );
};

export default Sidebar;
