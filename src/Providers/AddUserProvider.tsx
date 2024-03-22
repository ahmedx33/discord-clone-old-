"use client"
import { mainUser } from "@/app/user/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AddUserProvider({ user }: { user: UserInterFace | null }) {
    const dispatch = useDispatch();

    useEffect(() => {
        let isMount = true
        if (isMount)
            dispatch(mainUser(user))

        return () => { isMount = false }
    }, [user, dispatch])

    return (
        <></>
    )
}
