"use client";
import { mainUser } from "@/lib/store/features/user/userSlice";
import { User } from "@prisma/client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AddUserProvider({ user }: { user: User }) {
    const dispatch = useDispatch();

    useEffect(() => {
        let isMount = true;

        if (isMount) dispatch(mainUser(user));

        return () => {
            isMount = false;
        };
    }, [user, dispatch]);

    return null;
}
