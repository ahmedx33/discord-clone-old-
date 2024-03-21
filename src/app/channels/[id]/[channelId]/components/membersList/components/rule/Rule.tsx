import { useEffect, useState } from "react";
import MemberProfile from "../MemberProfile";

export default function Rule({
    name,
    users,
    members,

}: Omit<RuleInterface, "id"> & {
    users: UserInterFace[];
    members: MemberInterface[]
}) {
    const member = members?.filter((member) => member.rules?.find((rule) => rule === name))
    const memberIds = member?.map((member) => member.autherId)
    const getMembersFromUsersIds = users?.filter((user) => user.id === memberIds?.find((id) => id === user.id));

    return (
        <>
            <div className="text-[#949BA4] font-semibold">{name}</div>
            <div>
                {getMembersFromUsersIds.map((user) => (
                    <MemberProfile key={user.id} name={user.userName} profileImg={user.profileImg} />
                ))}
            </div>
        </>
    );
}
