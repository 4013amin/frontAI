import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import React from "react";

const Header = () => {
  return (
    <header className="w-full p-3 items-center">
      <div className="w-full bg-red-200 flex-between-center">
        <div>l</div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
