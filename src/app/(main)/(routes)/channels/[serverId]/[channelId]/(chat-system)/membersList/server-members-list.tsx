"use client";

import { Member, Role, User } from "@prisma/client";
import ServerRole from "./components/role/server-role";

interface ServerMembersProps {
    users: User[];
    roles: Role[];
    members: Member[];
}

export default function ServerMembersList({ users, roles, members }: ServerMembersProps) {
    return <>
            <div className="min-w-[250px] h-screen bg-[#2B2D31] px-3 pt-[4.5rem] z-50">
                <div>
                    {roles?.map((role) => (
                        <ServerRole key={role.id} name={role.name} members={members} users={users} />
                    ))}
                </div>
            </div>
        </>
}
