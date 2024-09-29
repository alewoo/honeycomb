// src/app/api/user/update/route.ts
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(req: NextRequest) {
    const client = await clientPromise;
    const db = client.db('Honeycomb'); // Your database name

    try {
        // Get the request body, which should contain userId and the fields to update
        const { userId, newInfo } = await req.json(); 

        if (!userId || !newInfo) {
            return NextResponse.json({ message: 'Missing userId or data to update' }, { status: 400 });
        }

        // Convert userId string to ObjectId if it's not already
        const userObjectId = new ObjectId(userId);

        // Update the user in the collection
        const result = await db.collection('users').updateOne(
            { _id: userObjectId },   // Find the user by their unique ID
            { $set: newInfo }         // Use $set to add or update fields in the user's document
        );

        if (result.modifiedCount === 0) {
            return NextResponse.json({ message: 'No changes made to the user' }, { status: 404 });
        }

        // Return success response
        return NextResponse.json({ message: 'User updated successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error updating user data:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
