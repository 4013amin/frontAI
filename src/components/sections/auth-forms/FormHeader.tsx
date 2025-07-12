import React from "react";

type IProps = {
  title: string;
  desc: string;
};

const FormHeader = ({ title, desc }: IProps) => {
  return (
    <div id="form-header">
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-sm text-slate-500 dark:text-slate-200">{desc}</p>
    </div>
  );
};

export default FormHeader;
