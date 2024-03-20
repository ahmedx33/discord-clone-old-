import { createPortal } from "react-dom"
import MemberProfile from "./components/MemberProfile"

export default function ServerMembers({ members, users }: { members: MemberInterface[], users: UserInterFace[] }) {
    const getMembersFromUsersIds = () => {
        const membersIds = members?.map(member => member.autherId)
        return users?.filter(user => membersIds.includes(user.id))
    }

    return createPortal(
        <><div className="min-w-[250px] h-screen bg-[#2B2D31] px-3 pt-[4.5rem] z-50"><div>{
            getMembersFromUsersIds()?.map(member => <div key={member.id}><MemberProfile  name={member.userName} profileImg={member.imgUrl} /></div>)
        }</div></div></>, document.querySelector("#sidebar") as Element)
}
