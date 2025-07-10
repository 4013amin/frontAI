import { PanelRight } from "lucide-react";
import React from "react";
import { toggleSidebar } from "@/store/features/sidebarSlice";
import { useDispatch } from "react-redux";

type IProps = {
    className?: string;
}

const SidebarToggler = ({className}: IProps) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={`p-2 rounded-md hover:bg-gray-200 
      dark:hover:bg-zinc-800 transition-colors duration-300
      ${className}`}
      onClick={() => {
        // Dispatch the toggleSidebar action to open/close the sidebar
        dispatch(toggleSidebar());
      }}
    >
      <PanelRight />
    </button>
  );
};

export default SidebarToggler;
