import React from "react";
import LoginForm from "./LoginForm";
import FormLogo from "./FormLogo";

const MainForm = () => {
  return (
    <div className="flex-center flex-col gap-4 w-full">
      
      <FormLogo />

      <div
        className="bg-white border rounded-2xl py-5 px-3 w-full
        md:!w-1/2 lg:!w-1/3 dark:bg-zinc-900
        "
      >
        <LoginForm />

      </div>
    </div>
  );
};

export default MainForm;
