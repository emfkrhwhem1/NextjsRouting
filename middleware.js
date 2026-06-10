import { NextResponse } from "next/server";

export default function middleware(request) {
    console.log(request);
    return NextResponse.next();
}


export const config = {
    matcher: '/news', // 보고싶은 request만 보는 필터링 기능 
}