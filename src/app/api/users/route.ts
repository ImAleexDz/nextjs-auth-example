import { NextRequest } from "next/server";
import { cookies } from "next/headers";

async function getAuthToken() {
    const cookieStore = await cookies();
    const token = cookieStore.get('next-auth.session-token')?.value
        || cookieStore.get('__Secure-next-auth.session-token')?.value
    if (!token) throw new Error('No auth token found');
    return token;
}

export async function GET() {
    try {
        const token = await getAuthToken();
        const res = await fetch('http://localhost:3002/api/auth/users', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        return Response.json(await res.json());
    } catch (error) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
}