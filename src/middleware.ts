import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const pathname = url.pathname;

    // adjust matcher lis as needed
    const protectedPaths = [
        '/',
        '/users'
    ]

    const shouldProtect = protectedPaths.some(p => pathname === p || pathname.startsWith(p + '/'));

    if (shouldProtect) {
        const token = 
            req.cookies.get('session')?.value ||
            req.cookies.get('token')?.value ||
            req.cookies.get('__Secure-next-auth.session-token')?.value

        if (!token) {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }

        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/', '/users/:path*', '/users'], // adjust matcher list as needed
}