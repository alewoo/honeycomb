import { NextRequest, NextResponse } from 'next/server'; // Import types for request/response
import clientPromise from '@/lib/mongodb'; // Ensure you're importing your MongoDB client

export async function POST(req: NextRequest): Promise<NextResponse> {
  const client = await clientPromise;
  const db = client.db('your_db_name'); // Replace with your actual database name

  try {
    // Get data from the request body
    const { username, password } = await req.json() as { username: string; password: string };

    // Check for existing user
    const existingUser = await db.collection('users').findOne({ username });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    // Create a new user (ensure password hashing in production)
    await db.collection('users').insertOne({ username, password });

    // Return success response with redirect info
    return NextResponse.json({ message: 'User created successfully', redirectTo: '/dashboard' }, { status: 201 });
  } catch (error) {
    console.error('Error during user signup:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
