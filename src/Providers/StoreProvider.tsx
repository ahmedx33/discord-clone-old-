"use client";
import { store } from "@/app/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: ReactNode }) {
    return (
        <>
            <Provider store={store}>{children}</Provider>
        </>
    );
}
