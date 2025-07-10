import React from "react";

type IProps = {
  className?: string;
  onClose?: () => void;
  isShown?: boolean;
};

const BackgroundOverlay = ({ className, onClose, isShown }: IProps) => {
  return (
    <div
      onClick={onClose}
      className={`w-full h-screen fixed top-0 
        left-0 bg-black/50 z-1 backdrop-blur-sm
        transition-all duration-300 invisible opacity-0
        pointer-events-none
        ${isShown ? "opacity-100 visible pointer-events-auto" : ""} 
        ${className}`}
    ></div>
  );
};

export default BackgroundOverlay;
