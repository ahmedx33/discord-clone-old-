import { Category, Channel, Member, Server, User } from "@prisma/client";



export type ServerWithChildren = Server & {
    members?: (Member & { auther: User })[];
    category?: (Category & { channels: Channel })[];
};
