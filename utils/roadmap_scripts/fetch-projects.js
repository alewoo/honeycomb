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
  
  async function fetchProjects() {

    // TODO: link these fields to the Form DB 
    major = "Mech E"
    year = "freshman"
    companies = ["Tesla", "john deere"]
    companies = companies.join(", ")
    roles = ["CAD engineer", 'mechanics']
    roles = roles.join(", ")
    level = "intermediate"
    skills = "cad"

    const userInput = `I am a ${major} ${year} who wants to apply for ${roles} internships in the future.

    The desired roles are ${roles}.

    Some of the skills I hope to develop are ${skills}
    
    Based on my above goals, generate a list of 4 ${level}, fun, non-generic projects I should perform to feel internship-ready and gain the required skills.
    
    The tech stack of the projects should be relevant to what is required in the internships. Also, the difficulty level should rise with each project.
    
    Each project should have a brief roadmap attached to it to provide some scaffolding. This would include:
    
    - Project Name
    - 1-2 line description of what it is
    - The tech stack required to build it (in the form of a list)
    - Roadmap
    
    Return the output as JSON with keys "project-name" (string without markdown), "description" (string without markdown), "tech-stack" (list without markdown), and "roadmap" (list without markdown).
    
    
    `;
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            { text: userInput },
        ],
        },
      ],
    });

    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    
    jsonResult = result.response.text()

    const cleanOutput = jsonResult
    .replace(/^```json\s*/, '')  // Removes ```json and any following whitespace/newlines
    .replace(/```$/, '');        // Removes the trailing ```

    
    projects = {};

    try {
        projects = JSON.parse(cleanOutput);
        // console.log("clean output as json")
        // console.log(projects);
      } catch (error) {
        console.error('Invalid JSON:', error);
      }

    // Accessing the parsed data
    projects.forEach((project, index) => {
        console.log(`Project ${index + 1}:`);
        console.log(`Name: ${project['project-name']}`);
        console.log(`Description: ${project['description']}`);
        console.log(`Tech Stack: ${project['tech-stack'].join(', ')}`);
        console.log(`Roadmap:`);
        project['roadmap'].forEach(step => console.log(step));
        console.log('\n');
    });
    return projects;
  }
