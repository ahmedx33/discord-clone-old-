import { createUser } from "@/db/user";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest): Promise<Response> => {
    try {
        const data = await req.json();
        const newUser = await createUser(data);
        return Response.json({ newUser }, { status: 200 });
    } catch (error) {
        const errorMessage = `[CREATE_USER_ERR] ${error}`;
        return new NextResponse(errorMessage);
    }
};
