import { useEffect, useState } from "react";
import MemberProfile from "../MemberProfile";

export default function Rule({
    name,
    members,
    users,
}: Omit<RuleInterface, "id"> & {
    users: UserInterFace[];
}) {
    const [memeberId, setMemberId] = useState<string>()


    useEffect(() => {
        let isMount = true

        if (isMount) {
            members.map((member) => setMemberId(member));
        }

        return () => { isMount = false }
    })

    console.log(members)

    const getMembersFromUsersIds = users?.filter((user) => user.id === memeberId);

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
