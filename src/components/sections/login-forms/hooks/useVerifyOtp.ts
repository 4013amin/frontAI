import { IOtpCode } from '@/components/types';
import API from '@/lib/axios';
import { RootState } from '@/store/store';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';

// Request Function 
const requestFn = ({ code, phone }: IOtpCode) => {
    return API.post("/auth/otp/verify/", { phone_number: phone, code: code })
};

const useVerifyOtp = () => {
    const phoneNumber = useSelector(
        (state: RootState) => state.auth.phoneNumber
    );
    const [verifyError, setVerifyError] = useState("")
    const navigation = useRouter()
    const {
        mutate,
        isPending,
        isError,
        isSuccess,
    } = useMutation({
        mutationFn: (code: string) => requestFn({ code: code, phone: phoneNumber }),
        onSuccess: () => {
            toast.success("با موفقیت وارد شدید!", { duration: 5000 })
            navigation.push("/auth/verify")
        },
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                setTimeout(() => {
                    setVerifyError("")
                }, 3000);
                // اگر خطا از نوع Axios باشد
                const statusCode = error.response?.status; // کد وضعیت HTTP
                const errorMessage = error.response?.data; // کد وضعیت HTTP

                if(statusCode === 400){
                    setVerifyError("کد وارد شده صحیح نیست")
                    toast.error("کد وارد شده صحیح نیست")
                }
                console.log("کد خطا:", statusCode);
                console.log("پیام خطا:", errorMessage);
            } else {
                // در غیر این صورت، خطای عمومی
                console.log("خطای عمومی:", error.message);
            }
        },
    });


    return { mutate, isPending, isError, isSuccess, verifyError }
};

export default useVerifyOtp;
