
export default function MessagesGroup({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-y-auto w-full h-[590px] mt-16">{children}</div>
    )
}
