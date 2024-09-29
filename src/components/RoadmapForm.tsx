import React, { useState } from "react";
import { plus_jakarta_sans_bold } from "../app/fonts";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateRoadmap({ careerPath, targetCompanies, interests });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className={`text-2xl ${plus_jakarta_sans_bold} text-[#0d3362] mb-4`}>
        Create Your Roadmap
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="careerPath" className="block text-[#0d3362] mb-2">
            What career path are you interested in?
          </label>
          <input
            type="text"
            id="careerPath"
            value={careerPath}
            onChange={(e) => setCareerPath(e.target.value)}
            className="w-full p-2 border rounded text-[#333] bg-[#faf7ed]"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="targetCompanies"
            className="block text-[#0d3362] mb-2"
          >
            Which companies are you targeting?
          </label>
          <input
            type="text"
            id="targetCompanies"
            value={targetCompanies}
            onChange={(e) => setTargetCompanies(e.target.value)}
            className="w-full p-2 border rounded text-[#333] bg-[#faf7ed]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="interests" className="block text-[#0d3362] mb-2">
            What are your interests or skills?
          </label>
          <textarea
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="w-full p-2 border rounded text-[#333] bg-[#faf7ed]"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setShowRoadmapForm(false)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#666a86] text-white px-4 py-2 rounded hover:bg-[#555872] transition duration-300"
          >
            Generate Roadmap
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoadmapForm;
