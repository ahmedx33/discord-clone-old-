import { createUser } from "@/db/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    const user = await createUser(data)

    return Response.json(data)
}
