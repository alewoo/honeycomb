import React, { useState } from 'react';

interface RoadmapFormProps {
  setShowRoadmapForm: (show: boolean) => void;
  generateRoadmap: (formData: any) => void;
}

const RoadmapForm: React.FC<RoadmapFormProps> = ({
  setShowRoadmapForm,
  generateRoadmap,
}) => {
  const [careerPath, setCareerPath] = useState("");
  const [targetCompanies, setTargetCompanies] = useState("");
  const [interests, setInterests] = useState("");
  const [skillLevel, setSkillLevel] = useState(""); // Added skill level field

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pass all the input data to the generateRoadmap function
    generateRoadmap({ careerPath, targetCompanies, interests, skillLevel });
    setShowRoadmapForm(false); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 mt-14">
      <div>
        <label htmlFor="careerPath" className="block text-gray-700 mb-2">
          What career path are you interested in?
        </label>
        <input
          type="text"
          id="careerPath"
          name="careerPath"
          value={careerPath}
          onChange={(e) => setCareerPath(e.target.value)} // Updates the state
          className="w-full px-4 py-2 rounded-full border text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
          placeholder="e.g., Software Engineering, AI Research, Data Science"
          required
        />
      </div>

      <div>
        <label htmlFor="targetCompanies" className="block text-gray-700 mb-2">
          Which companies are you targeting?
        </label>
        <input
          type="text"
          id="targetCompanies"
          name="targetCompanies"
          value={targetCompanies}
          onChange={(e) => setTargetCompanies(e.target.value)} // Updates the state
          className="w-full px-4 py-2 rounded-full border text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
          placeholder="e.g., Google, Meta, Netflix (comma-separated)"
          required
        />
      </div>

      <div>
        <label htmlFor="interests" className="block text-gray-700 mb-2">
          What are your interests or skills?
        </label>
        <textarea
          id="interests"
          name="interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)} // Updates the state
          className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
          placeholder="e.g., AI, Machine Learning, Web Development"
          rows={3}
          required
        />
      </div>

      <div>
        <label htmlFor="skillLevel" className="block text-gray-700 mb-2">
          What is your current experience in this field?
        </label>
        <input
          type="text"
          id="skillLevel"
          name="skillLevel"
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)} // Updates the state
          className="w-full px-4 py-2 rounded-full border text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
          placeholder="e.g., beginner, knowledgeable, experienced, pro"
          required
        />
      </div>

      <div className="flex justify-center space-x-4">
        <button
          type="submit"
          className="bg-[#eadaa2] text-white px-6 py-3 rounded-full hover:bg-[#d8c88f] transition duration-300"
        >
          Generate Roadmap
        </button>

        {/* Exit Button */}
        <button
          type="button"
          onClick={() => setShowRoadmapForm(false)}
          className="text-gray-800 px-6 py-3 hover:text-red-400 transition duration-300"
        >
          Exit
        </button>
      </div>
    </form>
  );
};

export default RoadmapForm;
