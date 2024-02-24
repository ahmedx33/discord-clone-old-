import { ReactNode } from "react";

export default function layout({ children, nav }: { children: ReactNode; nav: ReactNode }) {
      return (
            <div className="flex bg-[#313338]">
                  {nav}
                  {children}
            </div>
      );
}
