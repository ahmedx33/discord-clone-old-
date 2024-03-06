import Image from "next/image";

export default function RepliedMessage({ message, users }: { message: MessageInterFace | undefined, users?: UserInterFace[] }) {
    const getRepliedMember = users?.find((user) => user.id === message?.memberId)

    return (
        <div className="flex items-center gap-2 select-none">

            <div className={"flex items-center justify-center  pl-5  h-fit w-fit  hover:shadow-black cursor-pointer select-none"}>
                <Image src={getRepliedMember?.imgUrl as string} width={20} height={20} alt="profile" className="rounded-[50%]  " />
            </div>
            <div className="text-[#9FA0A4] font-bold text-[14px] hover:underline cursor-pointer">
                {getRepliedMember?.userName}
            </div>
            <div className="text-[#949BA4] hover:text-[#F2ECDD]  cursor-pointer">
                {message?.title}
            </div>
        </div>
    )
}
