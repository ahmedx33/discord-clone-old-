import Links from "./components/links";
import { LINKS } from "./constants";
import SocialLinks from "./components/social-links";
import BottomLogo from "./components/bottom-logo";

export default function Footer() {
    return <footer className="w-full h-[38rem] bg-dark-black flex items-center justify-center">
        <div className="container h-3/4 px-32">
            <div className="flex border-b-2 border-blue pb-7">
                <SocialLinks />
                <div className="w-full h-1/4 flex items-center justify-center"></div>
                <div className="flex flex-1 w-full h-full gap-6 text-white">
                    {LINKS.map(links => <Links key={links.title} title={links.title} links={links.links} />)}
                </div>
            </div>
            <BottomLogo />
        </div>
    </footer>
}
