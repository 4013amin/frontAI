import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "nextjs-toploader/app"
import { useState } from "react"
import { useSelector } from "react-redux"
import { toast } from "sonner"
import Cookies from "js-cookie"
import { useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import API from "@/lib/axios"
import { IOtpCode } from "@/components/types"
import { setTempToken } from "@/store/features/tempTokenSlice"


// Request Function 
const requestFn = ({ code, phone }: IOtpCode) => {
  return API.post("/auth/otp/verify/", { phone_number: phone, code: code })
}

const useVerifyOtp = () => {
  const phoneNumber = useSelector((state: RootState) => state.auth.phoneNumber)
  const dispatch = useDispatch()

  const [verifyError, setVerifyError] = useState("")
  const navigation = useRouter()

  const {
    mutate,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: (code: string) => requestFn({ code: code, phone: phoneNumber }),
    onSuccess: data => {
      const status = data.status
      const { is_new_user: isNewUser, token } = data.data


      if (status === 201 || status === 200) {
        // Set local token for middleware validation
        toast.success("با موفقیت وارد شدید!", { duration: 5000 })
        
        if (isNewUser === true) {
          navigation.replace("/auth/register")
          dispatch(setTempToken(token))
        }
        else {
          Cookies.set("auth_token", token, { path: "/", expires: 15 })
          navigation.replace("/panel")
        }
      }
    },
    onError: error => {
      if (axios.isAxiosError(error)) {
        setTimeout(() => {
          setVerifyError("")
        }, 4000)

        // Get error from Axios
        const errorMessageExp = error.response?.data.error
        const errorMessage = error.response?.data.detail
        if (errorMessageExp === "کد وارد شده منقضی شده است.") {
          setVerifyError("کد منقضی شده است")
          toast.error("کد منقضی شده است")
          return
        }
        else if (errorMessage === "No OTPCode matches the given query.") {
          setVerifyError("کد وارد شده صحیح نیست")
          toast.error("کد وارد شده صحیح نیست")
          return
        }
        else if (errorMessage === undefined) {
          // eslint-disable-next-line no-console
          console.log(error)
          toast.error("عملیات با شکست مواجه شد!")
          return
        }
      }
      else {
        // eslint-disable-next-line no-console
        console.log(error)
        toast.error("عملیات با شکست مواجه شد!")
      }
    }
  })


  return {
    mutate, isPending, isError, isSuccess, verifyError 
  }
}

export default useVerifyOtp