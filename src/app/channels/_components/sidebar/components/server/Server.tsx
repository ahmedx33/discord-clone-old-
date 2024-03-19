import Image from "next/image";

export function Server({ className, icon, name, width, defaultBg, height, fill }: ServerInterface) {
    return (
        <div
            className={`flex items-center relative justify-center w-[50px] h-[50px] p-[10px] rounded-full mk-Smooth cursor-pointer overflow-hidden ${className} ${
                defaultBg ? "bg-[#313338]" : "bg-white"
            } `}
        >
            <Image className="absolute" src={icon as string} alt="icon" draggable={false} fill={fill} width={width} height={height} />
        </div>
    );
}
