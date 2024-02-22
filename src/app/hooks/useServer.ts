import { getServers } from "@/db/db"
import { useEffect, useState } from "react"

interface ServerInterface {
    id: string
    name: string
    imgUrl: string
    autherId: string
    createdAt: Date
    updatedAt: Date
}

export default function useServer({ autherId }: { autherId: string }) {
    const [servers, setServers] = useState<ServerInterface | null>()
    const claim = async () => {

        const data = await getServers({ authorId: autherId })

        data.map(server => setServers(server))
    }


    return { servers }
}
