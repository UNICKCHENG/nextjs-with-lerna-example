import { NextRequest, NextResponse } from "next/server"

export function GET(request: NextRequest) {
    return new NextResponse("hello, this is a demo");
}