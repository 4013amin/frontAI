"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { toggleSidebar } from "@/store/features/sidebarSlice";

const SidebarOverlay = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      onClick={onClose}
      className={`w-full h-screen fixed top-0 
        left-0 bg-black/50 z-1 backdrop-blur-sm
        transition-all duration-300 invisible opacity-0
        pointer-events-none 
        ${
          isOpen
            ? "opacity-100 visible !pointer-events-auto cursor-pointer lg:!invisible lg:!opacity-0 lg:!pointer-events-none "
            : ""
        }`}
    ></div>
  );
};

export default SidebarOverlay;
