import MainForm from "@/components/sections/login-forms/MainForm";
import React from "react";

function page() {
  return (
    <div className="relative z-0 min-h-screen flex-center p-3">
      <div className="absolute inset-0 z-[-1] bg-pattern" />
      
      <MainForm />

    </div>
  );
}

export default page;
