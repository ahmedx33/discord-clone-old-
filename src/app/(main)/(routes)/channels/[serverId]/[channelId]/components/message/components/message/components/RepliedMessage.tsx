"use client"
import Image from "next/image";
import "../index.css";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { Message, User , Member} from "@prisma/client";

interface RepliedMessageProps {
    member: Member
    message: Message
    users: User[]
}

export default function RepliedMessage({ message, users, member }: RepliedMessageProps) {
    const user = useSelector((state: RootState) => state.user.value);
    const messageOwner = member.id !== message.memberId ? member : null

    console.log(messageOwner)

    const getRepliedMember = user?.id === messageOwner?.autherId ? user : users?.find((user) => user.id === messageOwner?.autherId);
    const element = document.getElementById(message?.id as string);

    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         entry.target.classList.remove("highlight");
    //     });
    // });
    //
    // if (element && element instanceof Element) {
    //     observer.observe(element);
    // }
    return (
        <div className="flex items-center gap-2 select-none mb-2 relative repliedPath">
            {message?.id ? (
                <div className={"flex items-center justify-center  pl-5  h-fit w-fit  hover:shadow-black cursor-pointer select-none"}>
                    <Image src={getRepliedMember?.profileImg as string} width={20} height={20} alt="profile" className="rounded-[50%]  " />
                </div>
            ) : (
                "Original message was deleted"
            )}
            <div className="text-[#9FA0A4] font-bold text-[14px] hover:underline cursor-pointer">{getRepliedMember?.displayName}</div>
            <div
                className="text-[#949BA4] hover:text-[#F2ECDD]  cursor-pointer"
                onClick={() => {
                    element?.scrollIntoView({ behavior: "smooth", block: "center" });
                    // element?.classList.add("highlight");
                }}
            >
                {message?.title}
            </div>
        </div>
    );
}
