"use client"

import Image from "next/image"

export default function Message({ title, memberId, userData }: { title: string, memberId: string, userData?: UserInterFace[] }) {
    const getUser = userData && userData.find(user => user.id === memberId)

    return (
        <div className="hover:bg-[#2E3035] my-3">
            <div className="flex items-center gap-x-3">
                <div className={"flex items-start overflow-hidden pl-5 w-fit h-fit hover:shadow-black cursor-pointer"}>
                    <Image src={getUser?.imgUrl as string} width={40} height={40} alt="profile" className="rounded-[50%] h-[40px] bg-cover" />
                </div>
                <div className="text-white hover:underline cursor-pointer w-fi relative -top-[0.5rem]">{getUser?.userName}</div>

            </div>
            <div className="text-[#DBDEE1] px-[4.4rem]">{title}</div>
        </div>
    )
}
