"use client";
import React, { ReactNode } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const MainContentProvider = ({ children }: { children: ReactNode }) => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  return (
    <div
      className={` transition-all duration-300 container
      mx-auto ${isOpen ? "lg:pr-[260px]" : ""}`}
    >
      {children}
    </div>
  );
};

export default MainContentProvider;
