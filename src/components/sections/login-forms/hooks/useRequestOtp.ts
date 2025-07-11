import { IPhoneNumber } from '@/components/types';
import API from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';


// Request Function 
const requestFn = ({ phone }: IPhoneNumber) => {
    return API.post("/auth/otp/request/", { phone_number: phone })
};

const useRequestOtp = () => {
    const navigation = useRouter()
    const {
        mutate,
        isPending,
        isError,
        isSuccess
    } = useMutation({
        mutationFn: (phone: string) => requestFn({ phone: phone }),
        onSuccess: () => {
            toast.success("کد تایید با موفقیت ارسال شد", { duration: 5000 })
            navigation.push("/auth/verify")
        },
        onError: (error) => {
            toast.error("کد تایید ارسال نشد!")
            console.log(error);
        },
    });

    return { mutate, isPending, isError, isSuccess }
};

export default useRequestOtp;
