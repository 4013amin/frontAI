import Logo from "@/components/ui/Logo";
import React from "react";
import LoginForm from "./LoginForm";

const MainForm = () => {
  return (
    <div
      className="bg-white border rounded-2xl p-3 w-full
        md:!w-1/2 lg:!w-1/3
        "
    >
      <Logo/>

      <LoginForm />


    </div>
  );
};

export default MainForm;
