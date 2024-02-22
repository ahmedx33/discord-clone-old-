import Profile from "./components/Profile";
import ServerData from "./components/serverData";

export default function InfoNav() {
    return (
        <div className="h-screen w-[240px] bg-[#2B2D31] relative">
            <ServerData title="General" />
            <div className="absolute left-0 bottom-0 w-full">
                <Profile />
            </div>
        </div>
    )
}
