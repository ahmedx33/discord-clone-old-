import { ReactNode } from "react";

export default function layout({ children, nav }: { children: ReactNode, nav: ReactNode }) {
    return (
        <div className="flex">
            {nav}
            {children}
        </div>
    )
}
