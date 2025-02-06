import { NextResponse } from "next/server";
import { saveLocationAction } from "@/actions/LocationAction";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = await saveLocationAction(body);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
