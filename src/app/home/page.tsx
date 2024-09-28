"use client";

import React, { useState } from "react";
import Link from "next/link";
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from "../fonts";

const HomePage = () => {
  const [showRoadmapForm, setShowRoadmapForm] = useState(false);
  const [roadmapData, setRoadmapData] = useState({
    careerPath: "",
    targetCompanies: "",
    interests: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRoadmapData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Roadmap data submitted:", roadmapData);
    // For now, we'll just log it and show an alert
    alert("Roadmap creation initiated! Check the console for details.");
    setShowRoadmapForm(false);
  };

  return (
    <div className={`min-h-screen bg-white ${plus_jakarta_sans_regular}`}>
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <Link
          href="/"
          className="text-gray-800 text-2xl font-bold font-sans hover:text-[#eadaa2] transition duration-300"
        >
          honeycomb.
        </Link>
        <button className="text-gray-600 hover:text-gray-800">Logout</button>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1
          className={`text-4xl ${plus_jakarta_sans_bold} text-center text-[#0d3362] mb-8`}
        >
          Welcome to Your Honeycomb Dashboard
        </h1>

        {!showRoadmapForm ? (
          <div className="text-center">
            <p className="mb-6 text-lg text-gray-600">
              Ready to design your future? Create a personalized roadmap to land
              your dream internship.
            </p>
            <button
              onClick={() => setShowRoadmapForm(true)}
              className="bg-[#eadaa2] text-white px-6 py-3 rounded-full hover:bg-[#d8c88f] transition duration-300"
            >
              Create Your Roadmap
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
            <div>
              <label htmlFor="careerPath" className="block text-gray-700 mb-2">
                What career path are you interested in?
              </label>
              <input
                type="text"
                id="careerPath"
                name="careerPath"
                value={roadmapData.careerPath}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
                placeholder="e.g., Software Engineering, AI Research, Data Science"
                required
              />
            </div>
            <div>
              <label
                htmlFor="targetCompanies"
                className="block text-gray-700 mb-2"
              >
                Which companies are you targeting?
              </label>
              <input
                type="text"
                id="targetCompanies"
                name="targetCompanies"
                value={roadmapData.targetCompanies}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
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
                value={roadmapData.interests}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
                placeholder="e.g., AI, Machine Learning, Web Development"
                rows={3}
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#eadaa2] text-white px-6 py-3 rounded-full hover:bg-[#d8c88f] transition duration-300"
              >
                Generate Roadmap
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
};

export default HomePage;
