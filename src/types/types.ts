import { Category, Channel, Member, Message, Server, User } from "@prisma/client";



export type ServerWithChildren = Server & {
    members?: (Member & { auther: User })[];
    category?: (Category & { channels: Channel })[];
};

export type ChannelWithMessages = Channel & {
    messages: Message[]
}