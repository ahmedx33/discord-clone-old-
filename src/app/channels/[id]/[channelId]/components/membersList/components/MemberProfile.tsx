import Image from "next/image";

export default function MemberProfile({ name, profileImg }: Omit<MemberProfileInterface, "id">) {
    return <>
        <div className="flex items-center gap-x-2 hover:text-[#DBDEE1] bg-[#35373C] p-2 rounded-[5px]">
            <div>
                <Image src={profileImg} alt="profileImg" width={30} height={30} className="rounded-full" />
            </div>

            <div className="text-[#949B99] font-semibold">
                {name}
            </div>

        </div>
    </>
}
