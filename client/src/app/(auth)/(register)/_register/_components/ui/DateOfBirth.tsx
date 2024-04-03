"use client"

import { SelectDemo } from "@/components/ui/select-demo";

export default function DateOfBirth() {
    return (
        <>
            <SelectDemo className="flex-1" title="Month" withLable={false} label="Date of Birth" data={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]} />

            <SelectDemo className="flex-1" title="Day" withLable={false} data={Array.from({ length: 31 }, (_, i) => i + 1)} />

            <SelectDemo className="flex-1" title="Year" withLable={false} label="Date of Birth" data={["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010"]} />
        </>
    )
}
