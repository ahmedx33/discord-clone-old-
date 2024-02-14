import { Separator } from "@/components/ui/separator";
import { Channel } from "./components/Channel";

export function ChannelsList() {
    return (
        <div className="flex flex-col gap-2 bg-[#1E1F22] w-fit h-screen p-2">
            <div className="main-icon"><Channel defaultBg className=" main-blue" width={30} height={30} icon="/svgs/discord.svg" name="Direct Messages" /></div>
            <Separator className="py-[1px] rounded-full bg-[#313338]" />
            <div className="channels">
                <ul className="flex flex-col gap-2">

                    <li>
                        <Channel icon="/voll.png" name="General" width={60} height={60} />
                    </li>
                    <li>
                        <Channel icon="/voll.png" name="General" width={60} height={60} />
                    </li>

                    <li>
                        <Channel icon="/voll.png" name="General" width={60} height={60} />
                    </li>

                    <li>
                        <Channel defaultBg className="main-green" icon="/svgs/addServer.svg" name="General" width={25} height={25} />
                    </li>

                    <li>
                        <Channel defaultBg className="main-green" icon="/svgs/exploreServer.svg" name="General" width={25} height={25} />
                    </li>
                </ul>
            </div>
        </div >
    );
}
