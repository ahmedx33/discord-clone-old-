
interface MessageInterFace {
    id: string
    memberId: string
    channelId: string
    title: string
    isGrouped?: boolean
    createdAt: Date
    updatedAt: Date
}

interface UserInterFace {
    id: string
    email: string
    imgUrl: string
    displayName: string
    userName: string
    createdAt: Date
    updatedAt: Date
}

type ChannelType = "TEXT" | "AUDIO" | "VIDEO"

interface ChannelInterFace {
    id: string
    name: string
    serverId: string
    type: ChannelType
    createdAt: Date
    updatedAt: Date
}

interface ServerInterface {
    className?: string
    icon: string
    name: string
    width?: number
    height?: number
    fill?: boolean
    defaultBg?: boolean
}
