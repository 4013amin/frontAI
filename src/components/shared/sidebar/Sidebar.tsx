"use client";
import React from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import SidebarToggler from "@/components/ui/SidebarToggler";

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
      <aside
        className={`w-[260px] h-screen absolute top-0 -right-260 fixed 
            bg-red-500 transition-all duration-300 z-999
            ${isOpen ? "lg:right-0" : ""}`}
      >
        <SidebarToggler />
      </aside>
  );
};

export default Sidebar;
