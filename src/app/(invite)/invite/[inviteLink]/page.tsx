import { prisma } from "@/db/prisma";
import { currentUser } from "@/lib/current-user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page({ params: { inviteLink } }: { params: { inviteLink: string } }) {
    const user = await currentUser();

    if (!user) return redirect("/login");

    const checkMemberInServer = await prisma.server.findFirst({
        where: {
            inviteLink,

            members: {
                some: {
                    autherId: user.id,
                },
            },
        },
    });

    const existServerId = checkMemberInServer?.id

    const server = await prisma.server.update({
        where: {
            inviteLink
        },
        data: {
            members: {
                create: [
                    {id: user.id, autherId: user.id, roles: ["online"]}
                ]
            }
        }
    })

    revalidatePath("/channels")

    if (checkMemberInServer) return redirect(`/channels/${existServerId}`)

    if (server) return redirect(`/channels/${server.id}`);

    return null
}
