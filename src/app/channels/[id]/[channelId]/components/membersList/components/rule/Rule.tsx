import { ReactNode } from "react"

export default function Rule({ name, children, memberId }: Omit<RuleInterface, "id" > & {
    children: ReactNode
}) {
    return <>
        <div>{name}</div>
        <div></div>
    </>
}
