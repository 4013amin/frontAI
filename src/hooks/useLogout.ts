import { useMutation } from "@tanstack/react-query"
import axios from "axios"
// import Cookies from "js-cookie"
import { toast } from "sonner"
// import { useRouter } from "next/navigation"
import API from "@/lib/axios"

const requestFn = () => API.post("/auth/logout/")

const useLogout = () => {
  // const navigation = useRouter()

  const {
    mutate,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: requestFn,
    onSuccess: () => {
      // حتی اگر سرور خطا نده
      // Cookies.remove("local_token", { path: "/" })
      // localStorage.clear()
      // sessionStorage.clear()

      toast.success("با موفقیت خارج شدید!", { duration: 5000 })
      // navigation.replace("/auth/login")
    },
    onError: error => {
      if (axios.isAxiosError(error)) {
        // const status = error.response?.status

        const errorMessage = error.response?.data?.detail || "خطایی رخ داد"
        toast.error("خروج انجام نشد: " + errorMessage)
        // eslint-disable-next-line no-console
        console.error("Logout error:", error)
        
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

export default useLogout