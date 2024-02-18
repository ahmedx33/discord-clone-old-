import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const reqURL = new URL(req.url);
    const code = reqURL.searchParams.get("code");
    if (code) {
        const supabase = createRouteHandlerClient({ cookies })
        await supabase.auth.exchangeCodeForSession(code);
    }
    return NextResponse.redirect(reqURL.origin)
}
