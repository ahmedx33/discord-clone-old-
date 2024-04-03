"use client";
import Image from "next/image";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginForm() {
    const router = useRouter();
    const supabase = createClientComponentClient();

    const loginHandler = async (formData: FormData) => {
        const res = {
            email: formData.get("email") as string,
            password: formData.get("pass") as string,
        };

        const { error } = await supabase.auth.signInWithPassword(res);

        if (error?.message) {
            toast.error(error.message);
        }
    };

    supabase.auth.onAuthStateChange(async (_, session) => {
        if (session?.access_token) {
            router.push("/channels");
        }
    });

    
    return (
        <div className="select-none flex items-center justify-center gap-[4rem] w-[45rem] p-5 px-[2rem] bg-[#313338] rounded-[7px]">
            <div className="flex items-center flex-col flex-1">
                <h1 className="text-[#EDEEF0] font-bold text-[24px] mt-7 mb-2">Welcome back!</h1>
                <p className="text-[#A2A6AD] mb-[19px]">We&apos;re so excited to see you again!</p>
                <form action={loginHandler} className="w-full">
                    <div className="flex flex-col gap-2 w-full mb-4">
                        <label htmlFor="email" className="text-[#A1A5AC] font-bold uppercase text-[0.8rem]">
                            Email
                        </label>
                        <input required id="email" type="email" name="email" className={`rounded-[2.5px] p-2 bg-[#1E1F22] border-none caret-white text-[#C6C9CC]`} />
                        <label htmlFor="password" className="text-[#A1A5AC] font-bold uppercase text-[0.8rem]">
                            Password
                        </label>
                        <input required id="password" type="password" name="pass" className={`rounded-[2.5px] p-2 bg-[#1E1F22] border-none caret-white text-[#C6C9CC]`} />
                    </div>
                    <h1 className="w-fit text-[#00A8FC] text-[0.9rem] cursor-pointer hover:underline mb-2">Forgot your password?</h1>

                    <Button className="w-full mb-2 rounded-[2.5px] bg-[#5865F2] hover:bg-[#4752C4] text-white">login</Button>
                </form>

                <h1 className="text-[#A2A6AD] text-[0.9rem] w-full flex items-end">
                    Need an account?
                    <span className="text-[#00A8FC] cursor-pointer hover:underline mx-1">
                        <Link href="/register">Register</Link>
                    </span>
                </h1>
            </div>
            <div>
                <AnotherOption />
            </div>
        </div>
    );
}

function AnotherOption() {
    return (
        <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-fit bg-white p-2 rounded-[4px] mb-6">
                <Image src="/svgs/loginSvgs/qrCode.svg" width={150} height={150} alt="qrCode" draggable="false" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-[#EDEEF0] font-bold text-[1.5rem]">Log in with QR code</h1>
                <p className="text-[#A2A6AD] text-center w-[250px]">
                    Scan this with the <strong>Discord mobile app</strong> to log in instantly
                </p>
            </div>
        </div>
    );
}
