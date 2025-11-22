import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const pathname = url.pathname;

    const protectedPaths = ['/', '/users'];
    const shouldProtect = protectedPaths.some(p => pathname === p || pathname.startsWith(p + '/'));

    if (shouldProtect) {
        const token = 
            req.cookies.get('session')?.value ||
            req.cookies.get('token')?.value ||
            req.cookies.get('__Secure-next-auth.session-token')?.value ||
            req.cookies.get('next-auth.session-token')?.value

        if (!token) {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }

        try {
            // Convert secret string to Uint8Array for jose
            const secret = new TextEncoder().encode('StYyjhRtHjb+necK++HXTsV1MHV9Q2CNph5gP7Px114=');
            
            // Validate token with jose (Edge Runtime compatible)
            await jwtVerify(token, secret);
            console.log('Token valid');
        } catch (error) {
            console.log('JWT validation error:', error);
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/users/:path*'],
};