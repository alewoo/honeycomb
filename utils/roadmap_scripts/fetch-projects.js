require("dotenv").config();

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Define model here
});

const generationConfig = {
  temperature: 1.4,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function fetchProjects(formData) {
  const { year, major, roles, companies, interests, level } = formData;

  const userInput = `
I am a ${major} ${year} who wants to apply for ${roles} internships in the future.

The desired roles are ${roles}.

Based on my above goals, generate a list of 4 ${level}, fun, non-generic projects I should perform to feel internship-ready and gain the required skills.

The tech stack of the projects should be relevant to what is required in the internships. Also, the difficulty level should rise with each project.

Each project should have a brief roadmap attached to it to provide some scaffolding. This would include:

- Project Name
- 1-2 line description of what it is
- The tech stack required to build it (in the form of a list)
- Roadmap

Return the output as **JSON** with the following structure:
{
  "projects": [
    {
      "project-name": "string",
      "description": "string",
      "tech-stack": "string",
      "roadmap": "string"
    }
  ]
}
`;

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [{ text: userInput }],
        },
      ],
    });

    const result = await chatSession.sendMessage(userInput);
    let jsonResult = result.response.text();

    // Log the full AI response for debugging
    console.log("Full AI Response:", jsonResult);

    // Extract JSON content using regex to capture the structured data
    const jsonMatch = jsonResult.match(/\{.*\}/s);

    if (!jsonMatch) {
      console.log("No valid JSON found in AI response:", jsonResult);
      throw new Error("No valid JSON found in the AI response.");
    }

    const cleanOutput = jsonMatch[0]; // Extracting the valid JSON portion

    let projects = {};
    try {
      projects = JSON.parse(cleanOutput); // Parse the cleaned JSON
    } catch (error) {
      console.error("Error parsing the cleaned JSON:", error);
      throw new Error("Failed to parse cleaned JSON.");
    }

    // Check that "projects" exists and is an array
    if (projects && Array.isArray(projects.projects)) {
      projects.projects.forEach((project, index) => {
        console.log(`Project ${index + 1}:`);
        console.log(`Name: ${project["project-name"]}`);
        console.log(`Description: ${project["description"]}`);
        console.log(`Tech Stack: ${project["tech-stack"]}`);
        console.log(`Roadmap: ${project["roadmap"]}`);
        console.log("\n");
      });

      return projects.projects; // Return parsed project array
    } else {
      console.error('Expected a "projects" array but got:', projects);
      throw new Error(
        'Expected a "projects" array but received something else.'
      );
    }
  } catch (error) {
    console.error("Error generating projects:", error);
    throw error;
  }
}

module.exports = fetchProjects;
