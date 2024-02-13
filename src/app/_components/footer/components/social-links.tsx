import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { ReactNode } from "react"
import { TbBrandTiktok } from "react-icons/tb"

export default function SocialLinks() {
    const icons: { icon: ReactNode, href: string }[] = [{ icon: <Twitter />, href: "https://twitter.com" }, { icon: <Instagram />, href: "https://instagram.com" }, { icon: <Facebook />, href: "https://facebook.com" }, { icon: <Youtube />, href: "https://youtube.com" }, { icon: <TbBrandTiktok size={23} />, href: "https://instagram.com" }]
    return <div className="w-full h-1/4 flex items-center justify-center">
        {icons.map(({ href, icon }) => <div key={href} className="w-10 h-10 rounded-full text-white flex items-center justify-center cursor-pointer">
            {icon}
        </div>)}
    </div>
}
