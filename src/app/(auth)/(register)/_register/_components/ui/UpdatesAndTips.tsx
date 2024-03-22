"use client"


import { Checkbox } from "@/components/ui/checkbox"

export default function UpdatesAndTips() {
    return (
        <div className="flex items-center space-x-2 mb-4">
            <Checkbox className="text-[1.2rem] w-[25px] h-[25px]" id="updates" />
            <label htmlFor="updates" className="text-[#AFB4BA] cursor-pointer  text-[0.7rem] w-[350px]">
                (Optional) It’s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.
            </label>
        </div>
    )
}
