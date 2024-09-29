// src/app/api/user/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { serialize } from 'cookie';  // Import serialize for setting cookies

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function GET(req: NextRequest) {
    const client = await clientPromise;
    const db = client.db('Honeycomb');

    const token = req.cookies.get('auth_token')?.value;

    if (!token) {
        return NextResponse.json({ message: 'No token found' }, { status: 401 });
    }

    try {
        // Verify and decode the token
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

        // Find the user in the database
        const user = await db.collection('users').findOne({ _id: new ObjectId(decoded.userId) });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Exclude sensitive data like password
        const { password, ...userData } = user;

        // Set the userData cookie (JSON string)
        const userDataCookie = serialize('user_data', JSON.stringify(userData), {
            httpOnly: false,  // Allow JavaScript access to the cookie (set to true for security in production)
            maxAge: 60 * 60 * 24,  // 1 day expiration
            path: '/',  // Make cookie available site-wide
            secure: process.env.NODE_ENV === 'production',  // Secure in production
        });

        // Create the response and set the cookie header
        const response = NextResponse.json(userData, { status: 200 });
        response.headers.set('Set-Cookie', userDataCookie);  // Set the cookie header

        return response;

    } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({ message: 'Error fetching user data' }, { status: 500 });
    }
}
