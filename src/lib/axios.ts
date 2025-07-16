// api.ts
import axios from "axios"
import Cookies from "js-cookie"
import { toast } from "sonner"

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
})

// 🟢 Request interceptor: Atomatic add token in headers
API.interceptors.request.use(
  config => {
    const token = Cookies.get("auth_token")
    if (token) {
      config.headers.Authorization = `Token ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

// 🔴 Response interceptor: 401 error | logout user
API.interceptors.response.use(
  response => response,
  error => {
    if (typeof window !== "undefined" && error.response?.status === 401) {
      // remove token
      Cookies.remove("auth_token")

      toast.error("نشست شما منقضی شده! دوباره وارد شوید")

      // clear everythings
      localStorage.clear()
      sessionStorage.clear()
      if ("caches" in window) {
        caches.keys().then(names => {
          names.forEach(name => caches.delete(name))
        })
      }

      // redirect to login page
      setTimeout(() => {
        window.location.href = "/auth/login"
      }, 3000)
    }

    return Promise.reject(error)
  }
)

export default API