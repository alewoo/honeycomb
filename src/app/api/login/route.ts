import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  const client = await clientPromise;
  const db = client.db('Honeycomb'); // Replace with your actual database name

  try {
    const { email, password } = await req.json(); // Get email and password from the request
    console.log("Received email:", email); // Log received email
    console.log("Received password:", password); // Log received password

    // Check if the user exists by email
    const user = await db.collection('users').findOne({ email });

    // If no user is found, return a 401 error
    if (!user) {
      console.error('User not found:', email); // Log if user is not found
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), { status: 401 });
    }

    // Check if the provided password matches the stored password
    if (password !== user.password) {
      console.error('Password mismatch for user:', email); // Log password mismatch
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), { status: 401 });
    }

    // If the login is successful, return a success message with user details
    return new Response(JSON.stringify({ message: 'Login successful', redirectTo: '/home' }), { status: 200 }); // Change to 200

  } catch (error) {
    console.error('Error during user login:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}
