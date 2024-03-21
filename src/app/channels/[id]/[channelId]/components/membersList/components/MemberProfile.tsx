import Image from "next/image";

export default function MemberProfile({ name, profileImg }: Omit<MemberProfileInterface, "id">) {
    return <>
        <div className="flex items-center gap-x-2 hover:text-[#DBDEE1] hover:bg-[#35373C] p-2 rounded-[5px] cursor-pointer">
            <div>
                <Image src={profileImg} alt="profileImg" width={30} height={30} className="rounded-full" />
            </div>

            <div className="text-[#949B99] font-semibold">
                {name}
            </div>

        </div>
    </>
}
