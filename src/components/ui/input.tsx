import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, name, required, ...props }, ref) => {
        const content = <input

            type={type}
            className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            ref={ref}
            {...props}
        />
        const reqiredClassnames = "after:content-['*'] relative after:-right-2.5 after:absolute after:-top-0.5 after:ml-0.5 after:text-red-500 block"
        return (
            name ? <div className="flex flex-col gap-0.5 w-full">
                <label id={props.id} className={`uppercase text-gray-400 text-sm font-bold w-fit ${required ? reqiredClassnames : ''}`}>{name}</label>
                {content}
            </div> : content
        )
    }
)
Input.displayName = "Input"

export { Input }
