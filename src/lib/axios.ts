import axios from "axios"

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000, // 10 ثانیه
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
})

export default API