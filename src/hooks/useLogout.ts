import { useMutation } from "@tanstack/react-query"
import axios from "axios"
// import { useRouter } from "next/navigation"
import { toast } from "sonner"
import API from "@/lib/axios"

// Request Function 
const requestFn = () => {
  return API.post("/auth/logout/")
}

const useLogout = () => {
  // const navigation = useRouter()

  const {
    mutate,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: () => requestFn(),
    onSuccess: data => {
      const status = data.status


      if (status === 200) {
        // Set local token for middleware validation
        // Cookies.remove("local_token", { path: "/" })
        // localStorage.clear()
        // sessionStorage.clear()

        // Redirect user
        // navigation.replace("/auth/login")
        toast.success("با موفقیت خارج شدید!", { duration: 5000 })
        return
      }
    },
    onError: error => {
      if (axios.isAxiosError(error)) {

        // Get error from Axios
        const errorMessage = error.response?.data.detail

        toast.error("خروج انجام نشد")

        // eslint-disable-next-line no-console
        console.log(errorMessage)
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
  })


  return {
    mutate, isPending, isError, isSuccess 
  }
}

export default useLogout