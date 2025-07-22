import { useMutation } from "@tanstack/react-query"
import { useRouter } from "nextjs-toploader/app"
import { toast } from "sonner"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import Cookies from "js-cookie"
import API from "@/lib/axios"
import { IFullName } from "@/components/types"
import { RootState } from "@/store/store"
import { clearTempToken } from "@/store/features/tempTokenSlice"
import useActiveTrialPlan from "@/hooks/useActiveTrialPlan"


// Request Function 
const requestFn = ({ full_name }: IFullName, token?: string) => {
  return API.patch(
    "/profile/complete/",
    { full_name },
    token
      ? { headers: { Authorization: `Token ${token}` } }
      : {}
  )
}

const useSubmitRegister = () => {
  const { mutate: mutateActiveTrial } = useActiveTrialPlan()
  const navigation = useRouter()
  const dispatch = useDispatch()
  const tempToken = useSelector((state: RootState) => state.tempToken.token)

  const {
    mutate,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: (full_name: string) => requestFn({ full_name }, tempToken || Cookies.get("auth_token")),
    onSuccess: () => {
      toast.success("اطلاعات شما با موفقیت بروزرسانی شد", { duration: 5000 })
      mutateActiveTrial(1)

      // اگر کاربر جدید بود، توکن را در کوکی قرار می‌دهیم
      if (tempToken) {
        Cookies.set("auth_token", tempToken, { path: "/", expires: 15 })
        dispatch(clearTempToken())
      }

      // ریدایرکت به پنل کاربری
      navigation.replace("/panel/my-sites")
    },
    onError: error => {
      if (axios.isAxiosError(error)) {
        const errorStatus = error.response?.status

        // بلاک کردن کاربران غیرمجاز
        if (errorStatus === 401) {
          toast.error("شما احراز هویت نشده اید!")
          navigation.replace("/auth/login")
        }
        else {
          toast.error("اطلاعات ذخیره نشد!")
        }
      }
      else {
        toast.error("خطای ناشناخته رخ داده است!")
      }
    }
  })

  return {
    mutate,
    isPending,
    isError,
    isSuccess
  }
}

export default useSubmitRegister