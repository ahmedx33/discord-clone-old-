import { ReactNode } from "react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

interface ActionTooltipProps {
    label: string;
    children: ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}

export function ActionTooltip({ label, children, side, align }: ActionTooltipProps) {
    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>{children}</TooltipTrigger>
                    <TooltipContent side={side} align={align}>
                        {label}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    );
}
