import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  const client = await clientPromise;
  const db = client.db('Honeycomb'); // Replace with your actual database name

  try {
    const { email, careerPath, targetCompanies, interests } = await req.json(); // Get data from the request

    // You can modify this to add the additional fields to the user's document
    const updateResult = await db.collection('users').updateOne(
      { email },  // Find the user by email
      {
        $set: {
          careerPath,
          targetCompanies,
          interests,
        },
      }
    );

    if (updateResult.matchedCount === 0) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'Roadmap created successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error during roadmap creation:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}
