// src/app/api/generate-roadmap/route.ts
import { NextResponse } from "next/server";
import generateRoadmap from "../../../../utils/roadmap_scripts/generate-roadmap"; // Import your projects-prompt.js function

export async function POST(req: Request) {
  try {
    const formData = await req.json(); // Parse the incoming data from the request
    console.log("Form Data: " + formData);
    // Call the function from projects-prompt.js
    const roadmap = await generateRoadmap(formData);

    // Return the generated roadmap as a JSON response
    return NextResponse.json(roadmap);
  } catch (error) {
    console.error("Error in /api/generate-roadmap route:", error);
    return NextResponse.json({ error: "Roadmap generation failed" }, { status: 500 });
  }
}
