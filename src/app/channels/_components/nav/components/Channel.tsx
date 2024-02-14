"use client"
import Image from "next/image";
import { useState } from "react";



interface Props {
    className?: string
    icon: string
    name: string
    width?: number
    height?: number
    fill?: boolean
    defaultBg?: boolean
}

export function Channel({ className, icon, name, width, defaultBg, height, fill }: Props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div onClick={() => setIsActive(prev => !prev)} className={`flex items-center relative justify-center w-[50px] h-[50px] p-[10px] rounded-full mk-Smooth cursor-pointer overflow-hidden ${className} ${defaultBg ? "bg-[#313338]" : "bg-white"} ${isActive ? "!rounded-[18px] !bg-blue" : ""}`}>
            <Image
                className="absolute"
                src={icon}
                alt="icon"
                draggable={false}
                fill={fill}
                width={width}
                height={height}
            />
        </div>
    );
}
