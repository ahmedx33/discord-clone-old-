import { createPortal } from "react-dom"
import MemberProfile from "./components/MemberProfile"
import Rule from "./components/rule/Rule"

export default function ServerMembers({ members, users, rules }: { members: MemberInterface[], users: UserInterFace[], rules: RuleInterface[] }) {
    const getMembersFromUsersIds = () => {
        const membersIds = members?.map(member => member.autherId)
        return users?.filter(user => membersIds.includes(user.id))
    }


    return createPortal(
        <><div className="min-w-[250px] h-screen bg-[#2B2D31] px-3 pt-[4.5rem] z-50"><div>{rules.map(rule => <Rule key={rule.id} name={rule.name} memberId={rule.memberId}/>)}</div></div></>, document.querySelector("#sidebar") as Element)
}
