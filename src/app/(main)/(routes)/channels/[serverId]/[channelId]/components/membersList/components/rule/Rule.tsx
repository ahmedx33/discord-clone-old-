import MemberProfile from "../MemberProfile";
import { Member, Rule, User } from "@prisma/client";

export default function ServerRule({
    name,
    users,
    members,
}: {
    name: string,
    users: User[];
    members: Member[]
}) {

    const filteredMembers = members?.filter(member => member.rules?.includes(name));

    const memberIds = filteredMembers?.map(member => member.autherId);

    const getMembersFromUsersIds = users?.filter(user => memberIds?.includes(user.id));

    return (
        <div className="mb-3">
            <div className="text-[#949BA4] font-semibold">{name}-{getMembersFromUsersIds.length}</div>
            <div>
                {getMembersFromUsersIds.map((user) => (
                    <MemberProfile key={user.id} name={user.displayName} profileImg={user.profileImg} />
                ))}
            </div>
        </div>
    );
}
