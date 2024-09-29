// src/app/api/user/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function GET(req: NextRequest) {
    const client = await clientPromise;
    const db = client.db('Honeycomb');

    const token = req.cookies.get('auth_token')?.value;

    if (!token) {
        return NextResponse.json({ message: 'No token found' }, { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

        const user = await db.collection('users').findOne({ _id: new ObjectId(decoded.userId) });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const { password, ...userData } = user; // Exclude sensitive data like password

        return NextResponse.json(userData, { status: 200 });

    } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({ message: 'Error fetching user data' }, { status: 500 });
    }
}
