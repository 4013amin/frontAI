import { Button } from "@/components/shadcn/Button";
import Link from "next/link";
import React from "react";
import { Loader2Icon, PencilLine } from "lucide-react";

type IProps = {
  isPending: boolean;
  text: string;
  isOtpForm?: boolean;
};

const FormFooter = ({ isPending, text, isOtpForm }: IProps) => {
  return (
    <>
      <Button
        type="submit"
        className="max-w-[380px] w-full bg-blue-500"
        size="lg"
        disabled={isPending}
      >
        {isPending ? <Loader2Icon className="animate-spin" /> : text}
      </Button>

      {isOtpForm && (
        <div>
          <Link
            href={"/auth/login"}
            className="font-sm text-blue-500 flex-center gap-3"
          >
            <PencilLine />
            ویراش شماره تلفن
          </Link>
        </div>
      )}

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
