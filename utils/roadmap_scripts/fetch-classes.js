/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

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

async function fetchClasses() {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "You are a course recommendation system for Georgia Tech.Based on the following information about a student, recommend 5 relevant courses at Georgia Tech that align with the student's goals. Student Information:\n\nMajor: CS\nYear: freshman\nDesired Roles: SWE, ML/AI\n\nPlease provide recommendations in the following JSON format with keys \"class\", \"rationale\""},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());

  jsonResult = result.response.text()

    const cleanResult = jsonResult
    .replace(/^```json\s*/, '')  // Removes ```json and any following whitespace/newlines
    .replace(/```$/, '');        // Removes the trailing ```

    
    classes = {};

    try {
      classes = JSON.parse(cleanResult);
      console.log(classes)
      // classes.forEach(class_ => {
      //   console.log(class_["class"] + ": " + class_["rationale"]);
      // });
      } catch (error) {
        console.error('Invalid JSON:', error);
      }

      return classes;
}

fetchClasses();