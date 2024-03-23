import Image from "next/image";

export default function Profile() {
    return (
        <div className="w-full h-[60px] p-2 bg-[#232428] cursor-pointer overflow-hidden select-none">
            <div className="flex items-center gap-3">
                <div className="w-[30px] h-[30px] rounded-full bg-red-500 relative">
                    <span className="absolute bottom-0 right-[-2px] w-[13px] h-[13px] rounded-full bg-green-500 border-[2px] border-[#232428]"></span>
                </div>
                <div className="text-white">
                    <h1>Ahmedx3</h1>
                    <p className="text-[13px]">online</p>
                </div>

                <div className="flex items-center gap-3">
                    <Image src="/svgs/muted.svg" width={22} height={22} alt="muted" draggable={false} />
                    <Image src="/svgs/defean.svg" width={22} height={22} alt="defean" draggable={false} />
                    <Image src="/svgs/settings.svg" width={22} height={22} alt="settings" draggable={false} />
                </div>

            </div>
        </div>
    )
}
