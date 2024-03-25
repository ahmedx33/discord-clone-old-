"use client";
import { mainUser } from "@/lib/store/slices/user-slice";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function AddUserProvider({ user }: { user: User | null }) {
    const [isMount, setIsMount] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsMount(true);

        if (isMount) dispatch(mainUser(user));

        return () => {
            setIsMount(false);
        };
    }, [user, dispatch, isMount]);

    return null;
}
