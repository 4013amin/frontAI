import { Menu, PanelRight, X } from "lucide-react";
import React, { memo } from "react";
import { toggleSidebar } from "@/store/features/sidebarSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type IProps = {
  className?: string;
};

const SidebarToggler = ({ className }: IProps) => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={`p-2 rounded-md hover:bg-gray-200 
      dark:hover:bg-zinc-800 transition-colors
      cursor-pointer ${className}`}
      onClick={() => {
        // Dispatch the toggleSidebar action to open/close the sidebar
        dispatch(toggleSidebar());
      }}
    >
      {isOpen ? (
        <X />
      ) : (
        <>
          <Menu className="!block lg:!hidden" />
          <PanelRight className="!hidden lg:!block" />
        </>
      )}
    </button>
  );
};

export default memo(SidebarToggler);
