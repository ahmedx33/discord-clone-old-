
export default function ServerData({ title }: { title: string }) {
    return (
        <div className="w-full h-[50px] border-b border-black flex items-center px-4">
            <h1 className="text-white text-[1.1rem]">{title}</h1>
        </div>
    )
}
