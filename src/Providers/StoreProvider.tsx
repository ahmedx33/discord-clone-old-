"use client";
import { store } from "@/app/store/store";
import { mainUser } from "@/app/user/userSlice";
import { ReactNode, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
export default function StoreProvider({ children }: { children: ReactNode }) {

    return (
        <>
            <Provider store={store}>{children}</Provider>
        </>
    );
}
