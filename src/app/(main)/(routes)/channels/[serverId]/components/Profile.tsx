"use client";

import { RootState } from "@/lib/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Profile() {
    const loggedUser = useSelector((state: RootState) => state.user.value);

    return (
        <div className="w-full h-[60px] p-2 bg-[#232428] cursor-pointer overflow-hidden select-none">
            <div className="flex items-center gap-3">
                <div className="w-[30px] h-[30px] rounded-full relative overflow-hidden">
                    <Image src={loggedUser.profileImg} alt="userImg" width={30} height={30}/>
                    <span className="absolute bottom-0 right-[-2px] w-[13px] h-[13px] rounded-full bg-green-500 border-[2px] border-[#232428]"></span>
                </div>
                <div className="text-white flex flex-col justify-center">
                    <h1 className="flex items-start">{loggedUser.displayName}</h1>
                    <p className="text-[13px]">{loggedUser.Status}</p>
                </div>

                <div className="flex items-center gap-3">
                    <Image src="/svgs/muted.svg" width={22} height={22} alt="muted" draggable={false} />
                    <Image src="/svgs/defean.svg" width={22} height={22} alt="defean" draggable={false} />
                    <Image src="/svgs/settings.svg" width={22} height={22} alt="settings" draggable={false} />
                </div>
            </div>
        </div>
    );
}
