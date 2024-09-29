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
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function fetchClasses(formData) {
  // Destructure the formData to extract user-specific information
  const { major, year, roles } = formData;

  // Define the user input prompt, explicitly defining the structure of the JSON response
  const userInput = `
You are a course recommendation system for Georgia Tech. Based on the following information about a student, recommend 5 relevant courses at Georgia Tech that align with the student's goals.

Student Information:
- Major: ${major}
- Year: ${year}
- Desired Roles: ${roles}

Please provide the recommendations in the following JSON format:
[
  {
    "class": "Course Name",
    "rationale": "A brief explanation of why this course is recommended"
  },
  ...
]

Ensure the output is valid JSON and includes exactly 5 course recommendations.
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

    // Send the user input to the model
    const result = await chatSession.sendMessage(userInput);
    let jsonResult = result.response.text();

    // Log the full AI response for debugging purposes
    console.log("Full AI Response:", jsonResult);

    // Extract JSON content using regex to match the structure
    const jsonMatch = jsonResult.match(/\[.*\]/s);

    if (!jsonMatch) {
      console.log("No valid JSON found in AI response:", jsonResult);
      throw new Error("No valid JSON found in the AI response.");
    }

    const cleanOutput = jsonMatch[0]; // Extract the JSON-like content

    let classes = {};
    try {
      classes = JSON.parse(cleanOutput); // Parse the cleaned JSON
    } catch (error) {
      console.error('Error parsing the cleaned JSON:', error);
      throw new Error('Failed to parse cleaned JSON.');
    }

    // Check if classes is an array and return it
    if (Array.isArray(classes)) {
      console.log("Class recommendations:", classes);
      return classes; // Return parsed classes
    } else {
      console.error('Expected an array of classes but got:', classes);
      throw new Error('Expected an array but received something else.');
    }
  } catch (error) {
    console.error('Error generating classes:', error);
    throw error;
  }
}

module.exports = fetchClasses;
