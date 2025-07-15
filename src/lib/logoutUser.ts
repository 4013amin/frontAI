import { toast } from "sonner"


export function logoutUser() {
  if (typeof window !== "undefined") {

    // نوتیفیکیشن
    toast.error("نشست شما منقضی شده. لطفاً دوباره وارد شوید.")

    // ریدایرکت
    // window.location.href = "/panel/logout"
  }
}