// api.ts
import axios from "axios"
import { logoutUser } from "./logoutUser"

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
})

// ⛔️ Global response interceptor to handle 401 errors
API.interceptors.response.use(
  response => response,
  error => {
    if (typeof window !== "undefined" && error.response?.status === 401) {
      logoutUser()
    }
    return Promise.reject(error)
  }
)

export default API