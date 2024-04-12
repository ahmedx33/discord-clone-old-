"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function ModalProvider({ children }: { children: ReactNode }) {
    return createPortal(<>{children}</>, document.body);
}
