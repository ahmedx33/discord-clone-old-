
interface MessageInterFace {
    id: string
    memberId: string
    channelId: string
    title: string
    isGrouped?: boolean
    replyTo: string
    createdAt: Date
    updatedAt: Date
}

interface UserInterFace {
    id: string
    email: string
    profileImg: string
    displayName: string
    userName: string
    createdAt: Date
    updatedAt: Date
}

type ChannelType = "TEXT" | "VOICE" | "VIDEO"

interface ChannelInterFace {
    id: string
    name: string
    categoryId: string
    type: ChannelType
    createdAt: Date
    updatedAt: Date
}

interface ServerInterface {
    id?: string
    className?: string
    icon?: string
    name: string
    width?: number
    height?: number
    fill?: boolean
    defaultBg?: boolean
}

interface TypingInterface {
    isTyping: boolean
    userId: string
}


interface MemberInterface {
    id: string
    rules?: string[]
    autherId: string
    serverId: string
    createdAt: Date
    updatedAt: Date
}


interface MemberProfileInterface {
    id: string
    name: string
    profileImg: string
    createdAt?: Date
    updatedAt?: Date
}

interface RuleInterface {
    id: string
    name: string
    serverId?: string
    createdAt?: Date
    updatedAt?: Date
}
