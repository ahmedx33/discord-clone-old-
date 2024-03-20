"use client"
import { getMembers } from "@/db/member";
import axios from "axios";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom"

export default function ServerMembers({   members}: {  members: MemberInterface[]}) {
    // const [members, setMembers] = useState<MemberInterface[]>()
    //
    //
    // useEffect(() => {
    //     let isMounted = true
    //     async function fetchMembers() {
    //         try {
    //
    //             const data = await axios.get("/members/api/") 
    //             if (isMounted) {
    //
    //                 setMembers(data)
    //             }
    //             console.log(members)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchMembers()
    //
    //     return () => { isMounted = false }
    // })
    return createPortal(
        <><div className="min-w-[250px] h-screen bg-[#2B2D31] px-3 pt-[4.5rem] z-50"><div>{
            members?.map(member => <div key={member.id}>{member.autherId}</div>)
        }</div></div></>, document.querySelector("#sidebar") as Element)
}
