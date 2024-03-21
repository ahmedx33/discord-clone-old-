import { createPortal } from "react-dom"
import MemberProfile from "./components/MemberProfile"
import Rule from "./components/rule/Rule"

export default function ServerMembers({ users, rules }: { users: UserInterFace[], rules: RuleInterface[] }) {
    console.log(rules)
    return createPortal(
        <><div className="min-w-[250px] h-screen bg-[#2B2D31] px-3 pt-[4.5rem] z-50"><div>{rules?.map(rule => <Rule key={rule.id} name={rule.name} members={rule.members} users={users} />)}</div></div></>, document.querySelector("#sidebar") as Element)
}
