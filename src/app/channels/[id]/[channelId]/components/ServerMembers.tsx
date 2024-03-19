import { createPortal } from "react-dom";

export default function ServerMembers({ serverId }: { serverId: string }) {
    return createPortal(
        <><div className="w-[200px] h-screen bg-red-300">{serverId}</div></>, document.querySelector("#sidebar") as Element)
}
