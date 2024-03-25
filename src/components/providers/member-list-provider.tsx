"use client"

import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function MemberListProvider({ children }: { children: ReactNode }) {
    return createPortal(<>{children}</>, document.getElementById("sidebar") as Element);
}
