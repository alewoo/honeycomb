import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(req: NextRequest) {
    const client = await clientPromise;
    const db = client.db('Honeycomb'); // Your database name

    try {
        // Parse the request body
        const { userId, newInfo } = await req.json(); 

        // Log the incoming data
        console.log("Received data to update:", JSON.stringify({ userId, newInfo }, null, 2));

        // Validate that userId and newInfo are provided
        if (!userId || !newInfo) {
            console.log("Missing userId or newInfo");
            return NextResponse.json({ message: 'Missing userId or data to update' }, { status: 400 });
        }

        // Convert userId string to ObjectId for MongoDB queries
        const userObjectId = new ObjectId(userId);
        console.log("Converted userId to ObjectId:", userObjectId);

        // Log the fields to be updated
        console.log("Fields to be updated:", JSON.stringify(newInfo, null, 2));

        // Update the user in the MongoDB collection
        const result = await db.collection('users').updateOne(
            { _id: userObjectId },   // Find the user by their unique ID
            { $set: newInfo }         // Use $set to update the fields in the user's document
        );

        // Log the result of the update operation
        console.log("Update result:", result);

        // If no documents were modified, log it and send a response
        if (result.modifiedCount === 0) {
            console.log("No changes made to the user.");
            return NextResponse.json({ message: 'No changes made to the user' }, { status: 404 });
        }

        // Log success and return a response
        console.log("User updated successfully.");
        return NextResponse.json({ message: 'User updated successfully' }, { status: 200 });

    } catch (error) {
        // Log any errors
        console.error('Error updating user data:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
