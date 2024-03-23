import { createPortal } from "react-dom"
import { Member, Rule, User } from "@prisma/client";

import ServerRule from "./components/rule/Rule"

export default function ServerMembersList({ users, rules, members }: { users: User[], rules: Rule[] , members: Member[]}) {
    return createPortal(
        <><div className="min-w-[250px] h-screen bg-[#2B2D31] px-3 pt-[4.5rem] z-50"><div>{rules?.map(rule => <ServerRule key={rule.id} name={rule.name}  members={members}  users={users} />)}</div></div></>, document.querySelector("#sidebar") as Element)
}
