import React from "react"
import { AlertCircleIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/Alert"

const DontHavePlan = () => {
  return (
    <Alert variant="destructive">

      <AlertCircleIcon />

      <AlertTitle className="flex gap-3 items-center">

        <span>شما اشتراک فعالی ندارید</span>
      </AlertTitle>

      <AlertDescription>
        <p>لطفا برای استفاده از امکانات یک پلن انتخاب نماید.</p>
      </AlertDescription>
    </Alert>
  )
}

export default DontHavePlan