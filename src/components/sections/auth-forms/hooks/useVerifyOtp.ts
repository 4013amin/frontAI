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
        onSuccess: (data) => {
            const status = data.status
            const { is_new_user: isNewUser } = data.data;

            if (status === 201) {
                if (isNewUser) navigation.push("/auth/register")
                else navigation.push("/auth/panel")
                toast.success("با موفقیت وارد شدید!", { duration: 5000 })
            }
        },
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                setTimeout(() => {
                    setVerifyError("")
                }, 3000);
                // Get error from Axios
                const errorMessage = error.response?.data.error;
                console.log(errorMessage);
                if (errorMessage === "Code has expired.") {
                    setVerifyError("کد منقضی شده است")
                    toast.error("کد منقضی شده است")
                } else if (errorMessage === "Invalid phone number or code.") {
                    setVerifyError("کد وارد شده صحیح نیست")
                    toast.error("کد وارد شده صحیح نیست")
                } else if (errorMessage === undefined) {
                    navigation.push("/auth/login")
                    toast.error("عملیات با شکست مواجه شد!")
                }
            } else {
                toast.error("عملیات با شکست مواجه شد!")
                console.log("خطای عمومی:", error.message);
            }
        },
    });


    return { mutate, isPending, isError, isSuccess, verifyError }
};

export default useVerifyOtp;
