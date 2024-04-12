"use client";
import DateOfBirth from "./ui/DateOfBirth";
import UpdatesAndTips from "./ui/UpdatesAndTips";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import axios from "axios";


interface RegisterFormProps {
    goBackButton?: boolean;
}

export default function RegisterForm({ goBackButton }: RegisterFormProps) {
    const router = useRouter();
    const supabase = createClientComponentClient();

    const signUpHandler = async (formData: FormData) => {
        
            const res = {
                email: formData.get("email") as string,
                password: formData.get("pass") as string,
                options: {
                    data: {
                        DisplayName: formData.get("displayName") as string,
                        userName: formData.get("username") as string,
                    },

                    emailRedirectTo: `${location.origin}/api/callback/`,
                },
            };

            const { data, error } = await supabase.auth.signUp(res);

            if (error) return toast.error(error.message)

            const userData = {
                userId: data.user?.id,
                email: formData.get("email") as string,
                profileImg: "https://ecsgjdvnggcyvhhseqso.supabase.co/storage/v1/object/public/profiles/default/avatar.png",
                displayName: formData.get("displayName"),
                userName: formData.get("username"),
            };

            await axios.post("/api/login/", userData);
       
    };

    supabase.auth.onAuthStateChange(async (_, session) => {
        if (session?.access_token) router.push("/channels");
    });

    return (
        <div className="select-none z-[5] flex items-center justify-center gap-[4rem] w-fit p-5 px-[2rem] bg-[#313338] rounded-[7px]">
            <div className="flex items-center flex-col relative">
                {goBackButton && (
                    <h1 className="hover:underline absolute left-0 text-[#DADDE0] ">
                        <Link href="/login" className="flex items-center space-x-3">
                            <IoIosArrowBack />
                            Go back
                        </Link>
                    </h1>
                )}
                <h1 className="text-[#B5BAC1] font-bold text-[24px] mt-7 mb-2">Create an account</h1>
                <form action={signUpHandler} className="w-full flex flex-col">
                    <label htmlFor="email" className="text-[#A1A5AC] font-bold uppercase text-[0.8rem]">
                        Email
                    </label>
                    <input required id="email" type="email" name="email" className={`mt-2 mb-4 rounded-[2.5px] bg-[#1E1F22] border-none caret-white text-[#C6C9CC]  py-2`} />
                    <label htmlFor="displayName" className="text-[#A1A5AC] font-bold uppercase text-[0.8rem]">
                        Display Name
                    </label>
                    <input required type="text" id="displayName" name="displayName" className={`mt-2 mb-4 rounded-[2.5px] bg-[#1E1F22] border-none caret-white text-[#C6C9CC] py-2`} />
                    <label htmlFor="username" className="text-[#A1A5AC] font-bold uppercase text-[0.8rem]">
                        UserName
                    </label>
                    <input required id="username" name="username" type="text" className={`mt-2 mb-4 rounded-[2.5px] bg-[#1E1F22] border-none caret-white text-[#C6C9CC] py-2`} />
                    <label htmlFor="password" className="text-[#A1A5AC] font-bold uppercase text-[0.8rem]">
                        password
                    </label>
                    <input required id="password" name="pass" type="password" className={`mt-2 mb-4 rounded-[2.5px] bg-[#1E1F22] border-none caret-white text-[#C6C9CC] py-2`} />
                    <div className="flex w-full gap-4 mb-3">
                        <DateOfBirth />
                    </div>
                    <UpdatesAndTips />

                    <Button className="w-full rounded-[2.5px] text-white bg-[#5865F2] hover:bg-[#4752C4]">Continue</Button>
                </form>
                <p className="text-[#A2A6AD] text-[0.7rem] mt-3">
                    By registering, you agree to Discord&apos;s <span className="text-[#00A8FC] text-[0.8rem] cursor-pointer hover:underline"> Terms of Service</span> and{" "}
                    <span className="text-[#00A8FC] text-[0.8rem] cursor-pointer hover:underline">Privacy Policy</span>.
                </p>

                <div className="w-fit text-[#00A8FC] text-[1rem] cursor-pointer hover:underline my-2">
                    <Link href={"/login"}>Already have an account?</Link>
                </div>
            </div>
            <Toaster richColors />
        </div>
    );
}
