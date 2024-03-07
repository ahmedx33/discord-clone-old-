import Image from "next/image";
import "../index.css";

export default function RepliedMessage({ message, users }: { message: MessageInterFace | undefined; users?: UserInterFace[] }) {
    const getRepliedMember = users?.find((user) => user.id === message?.memberId);
    const element = document.getElementById(message?.id as string);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.remove("highlight");
        });
    });

    if (element && element instanceof Element) {
        observer.observe(element);
    }
    return (
        <div className="flex items-center gap-2 select-none mb-2">
            <div className={"flex items-center justify-center  pl-5  h-fit w-fit  hover:shadow-black cursor-pointer select-none"}>
                <Image src={getRepliedMember?.imgUrl as string} width={20} height={20} alt="profile" className="rounded-[50%]  " />
            </div>
            <div className="text-[#9FA0A4] font-bold text-[14px] hover:underline cursor-pointer">{getRepliedMember?.userName}</div>
            <div
                className="text-[#949BA4] hover:text-[#F2ECDD]  cursor-pointer"
                onClick={() => {
                    element?.scrollIntoView({ behavior: "smooth", block: "center" });
                    element?.classList.add("highlight");
                }}
            >
                {message?.title}
            </div>
        </div>
    );
}
