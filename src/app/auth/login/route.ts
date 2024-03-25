import { createUser } from "@/db/user";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json()
        await createUser(data)
        return Response.json({ data }, { status: 200 })
    } catch (error) {
        return new NextRequest(`[CREATE_USER_ERR] ${error}`,)
    }
}