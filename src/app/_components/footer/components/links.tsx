import { LINKS } from "../constants";
import Link from "next/link"

export default function Links({ title, links }: typeof LINKS[number]) {
    return <div className="w-[11.5rem]">
        <h1 className="text-purple font-semibold text-md mb-3">{title}</h1>
        <div className="flex flex-col gap-2 flex-1">
            {links.map(link => <li key={link.href}><Link href={`/${link.href}`} className="text-sm">{link.name}</Link></li>)}
        </div>
    </div>
}
