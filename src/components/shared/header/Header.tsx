import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full items-center sticky top-0 right-0">
      <div
        className="w-full bg-white/90 flex-between-center p-3
       backdrop-blur-sm dark:bg-zinc-900/90 "
      >
        <div className="flex-center gap-2">
          <Image
            src={"/binam-logo.svg"}
            width={50}
            height={32}
            alt="هوش مصنوعی تولید محتوا"
          />
          <span className="font-semibold text-2xl">بینام</span>
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
