require('dotenv').config();

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1.4,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function fetchProjects(formData) {
  // Destructure the fields from formData
  const { year, major, roles, companies, interests, level } = formData;

  // Construct the user input string using the provided formData
  const userInput = `
I am a ${major} ${year} who wants to apply for ${rolesList} internships in the future.

The desired roles are ${rolesList}.

Based on my above goals, generate a list of 4 ${level}, fun, non-generic projects I should perform to feel internship-ready and gain the required skills.

The tech stack of the projects should be relevant to what is required in the internships. Also, the difficulty level should rise with each project.

Each project should have a brief roadmap attached to it to provide some scaffolding. This would include:

- Project Name
- 1-2 line description of what it is
- The tech stack required to build it (in the form of a list)
- Roadmap

Return the output as JSON with keys "project-name" (string without markdown), "description" (string without markdown), "tech-stack" (list without markdown), and "roadmap" (list without markdown).
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

    // Send the message to the model and await the response
    const result = await chatSession.sendMessage(userInput);
    let jsonResult = result.response.text();

    // Clean the JSON output by removing code block markers (```json and ```)
    const cleanOutput = jsonResult
      .replace(/^```json\s*/, '')  // Removes ```json and any following whitespace/newlines
      .replace(/```$/, '');        // Removes the trailing ```

    // Parse the cleaned JSON output
    let projects = {};
    try {
      projects = JSON.parse(cleanOutput);
    } catch (error) {
      console.error('Invalid JSON:', error);
      throw new Error("Failed to parse AI-generated JSON");
    }

    // Optional: Log the parsed project data
    projects.forEach((project, index) => {
      console.log(`Project ${index + 1}:`);
      console.log(`Name: ${project['project-name']}`);
      console.log(`Description: ${project['description']}`);
      console.log(`Tech Stack: ${project['tech-stack'].join(', ')}`);
      console.log(`Roadmap:`);
      project['roadmap'].forEach(step => console.log(step));
      console.log('\n');
    });

    // Return the parsed projects
    return projects;
  } catch (error) {
    console.error('Error generating projects:', error);
    throw error;
  }
}

// Export the fetchProjects function
module.exports = fetchProjects;
