import { Button } from "@/components/shadcn/Button";
import Link from "next/link";
import React from "react";
import { Loader2Icon } from "lucide-react";

type IProps = {
  isPending: boolean;
};

const FormFooter = ({ isPending }: IProps) => {
  return (
    <>
      <Button
        type="submit"
        className="max-w-[380px] w-full bg-blue-500"
        size="lg"
        disabled={isPending}
      >
        {isPending ? <Loader2Icon className="animate-spin" /> : "دریافت کد"}
      </Button>

      <div>
        <span className="text-xs font-light">
          ورود شما به معنای پذیرش شرایط بینام و
          <Link href={"#"} className="text-blue-500">
            {" "}
            قوانین حریم‌خصوصی{" "}
          </Link>
          است
        </span>
      </div>
    </>
  );
};

export default FormFooter;
