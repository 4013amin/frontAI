// api.ts
import axios from "axios"
import Router from "next/router"

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  withCredentials: true, // Send cookies with requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
})


// Response interceptor to handle 401 / UNATHORIZED errors
API.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Clear storage on unauthorized
      localStorage.clear()
      sessionStorage.clear()

      // Redirect to logout page
      Router.push("/auth/logout")
    }

    // Propagate the error to the calling code
    return Promise.reject(error)
  }
)

export default API