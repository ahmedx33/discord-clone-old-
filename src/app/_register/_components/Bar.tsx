import { Input } from "@/components/ui/input";
import DateOfBirth from "./ui/DateOfBirth";
import UpdatesAndTips from "./ui/UpdatesAndTips";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button";

interface BarInterface {
    goBackButton?: boolean
}

export default function Bar({ goBackButton }: BarInterface) {
    return (
        <div className="select-none z-[5] flex items-center justify-center gap-[4rem] w-fit p-5 px-[2rem] bg-[#313338] rounded-[7px]">
            <div className="flex items-center flex-col relative">
                {goBackButton && <h1 className="hover:underline absolute left-0 text-[#DADDE0] "><Link href="/login" className="flex items-center space-x-3"><IoIosArrowBack />Go back</Link></h1>}
                <h1 className="text-[#EDEEF0] font-bold text-[24px] mt-7 mb-2">
                    Create an account
                </h1>

                <Input
                    required
                    type="email"
                    name="email"
                    className={`mt-2 mb-4 rounded-[2.5px] bg-[#1E1F22] border-none caret-white text-[#C6C9CC] focus:bg-[#E8F0FE] focus:caret-black`}
                />
                <Input
                    type="text"
                    name="display name"
                    className={`mt-2 mb-4 rounded-[2.5px] bg-[#1E1F22] border-none caret-white text-[#C6C9CC] focus:bg-[#E8F0FE] focus:caret-black`}
                />
                <Input
                    required
                    name="username"
                    type="text"
                    className={`mt-2 mb-4 rounded-[2.5px] bg-[#1E1F22] border-none caret-white text-[#C6C9CC] focus:bg-[#E8F0FE] focus:caret-black`}
                />
                <Input
                    required
                    name="password"
                    type="password"
                    className={`mt-2 mb-4 rounded-[2.5px] bg-[#1E1F22] border-none caret-white text-[#C6C9CC] focus:bg-[#E8F0FE] focus:caret-black`}
                />
                <div className="flex w-full gap-4 mb-3">
                    <DateOfBirth />
                </div>
                <UpdatesAndTips />

                <Button className="w-full rounded-[0]">Continue</Button>

                <p className="text-[#A2A6AD] text-[0.7rem] mt-3">By registering, you agree to Discord&apos;s <span className="text-[#00A8FC] text-[0.8rem] cursor-pointer hover:underline"> Terms of Service</span> and <span className="text-[#00A8FC] text-[0.8rem] cursor-pointer hover:underline">Privacy Policy</span>.</p>

                <div className="w-fit text-[#00A8FC] text-[1rem] cursor-pointer hover:underline my-2"><Link href={"/login"}>Alread have an account?</Link></div>
            </div>
        </div>
    )
}
