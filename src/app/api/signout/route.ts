import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
    // Clear the JWT token from the cookie
    const cookie = serialize('auth_token', '', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        maxAge: -1, // Immediately expire the cookie
        path: '/',
    });

    return NextResponse.json({ message: 'Signed out successfully' }, {
        status: 200,
        headers: {
            'Set-Cookie': cookie,
        },
    });
}
