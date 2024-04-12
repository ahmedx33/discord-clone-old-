import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SelectDemoInterface {
    className?: string,
    title: string,
    withLable?: boolean,
    label?: string | undefined,
    data: any[]
}

export function SelectDemo({ withLable, title, data, className }: SelectDemoInterface) {
    const dat = data.map((d: string) => <SelectItem value={d} key={d}>{d}</SelectItem>)
    return (
        <Select>
            <SelectTrigger className={className}>
                <SelectValue className="text-[#C6C9CC]" placeholder={title} />
            </SelectTrigger>
            <SelectContent className="z-[9999]">
                <SelectGroup>
                    {withLable && <SelectLabel>{title}</SelectLabel>}
                    {dat}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
