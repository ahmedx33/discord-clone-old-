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

    const filteredMembers = members?.filter(member => member.rules?.includes(name));

    const memberIds = filteredMembers?.map(member => member.autherId);

    const getMembersFromUsersIds = users?.filter(user => memberIds?.includes(user.id));

    return (
        <div className="mb-3">
            <div className="text-[#949BA4] font-semibold">{name}</div>
            <div>
                {getMembersFromUsersIds.map((user) => (
                    <MemberProfile key={user.id} name={user.userName} profileImg={user.profileImg} />
                ))}
            </div>
        </div>
    );
}
