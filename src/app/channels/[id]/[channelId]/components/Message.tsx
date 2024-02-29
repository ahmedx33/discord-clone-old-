
export default async function Message({ title, memberId }: { title: string, memberId: string }) {
    return (
        <div>
            <div className="text-white hover:underline">{memberId}</div>
            <div className="text-white">{title}</div>
        </div>
    )
}
