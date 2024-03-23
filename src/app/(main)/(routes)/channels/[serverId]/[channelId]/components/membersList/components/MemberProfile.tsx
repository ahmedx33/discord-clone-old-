import Image from "next/image";

interface MemberProfileProps {
    name: string;
    profileImg: string;
}

export default function MemberProfile({ name, profileImg }: MemberProfileProps) {
    return (
        <>
            <div className="flex items-center gap-x-2  hover:bg-[#35373C] p-2 rounded-[5px] cursor-pointer">
                <div>
                    <Image src={profileImg} alt="profileImg" width={30} height={30} className="rounded-full" />
                </div>

                <div className="text-[#949BA4] font-semibold">{name}</div>
            </div>
        </>
    );
}
