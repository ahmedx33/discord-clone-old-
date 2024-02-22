import { createServer } from "@/db/user";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    const server = await createServer(data)

    revalidatePath("/channels")
    return Response.json(data)
}
