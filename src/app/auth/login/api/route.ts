import { createUser } from "@/db/user";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    const user = await createUser(data)
    redirect("/channels")
    return Response.json(data)
}
