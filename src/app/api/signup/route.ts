import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('Honeycomb'); // Replace with your actual database name

    try {
        // Parse the request body
        const body = await req.json();
        const { name, email, password, year, major } = body;

        // Log the parsed body for debugging
        console.log('Parsed body:', body);

        // Validate that name (username), email, and password exist
        if (!name || !email || !password) {
            console.error('Missing name, email, or password');
            return new Response(JSON.stringify({ message: 'Name, email, and password are required' }), { status: 400 });
        }

        // Check for existing user (case-insensitive) by email
        const existingUser = await db.collection('users').findOne({
            email: { $regex: new RegExp(`^${email}$`, 'i') }
        });

        console.log('existingUser:', existingUser); // Log for debugging
        if (existingUser) {
            return new Response(JSON.stringify({ message: 'User already exists' }), { status: 409 });
        }

        // Insert the new user (log inserted data for debugging)
        const result = await db.collection('users').insertOne({ name, email, password, year, major });
        console.log('New user inserted:', result);

        // Return a success response
        return new Response(JSON.stringify({ message: 'User created successfully', redirectTo: '/dashboard' }), { status: 201 });

    } catch (error) {
        console.error('Error during user signup:', error);
        return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
    }
}