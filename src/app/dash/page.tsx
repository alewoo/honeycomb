"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RoadmapForm from "@/components/dashboard/RoadmapForm";
import RoadmapDisplay from "@/components/RoadmapDisplay"; // New import

const DashboardPage = () => {
  const router = useRouter();
  const [showRoadmapForm, setShowRoadmapForm] = useState(false);
  const [generatedRoadmap, setGeneratedRoadmap] = useState(null); // New state
  // In a real application, you'd fetch this data from your backend
  const userName = "John"; // Replace with actual user data

  const handleGenerateRoadmap = (formData: any) => {
    console.log("Roadmap data:", formData);
    // Here you would typically send the data to your backend
    // For now, we'll generate a mock roadmap
    const mockRoadmap = {
      recommendedProjects: [
        {
          title: "Build a Personal Portfolio Website",
          description: "Create a website to showcase your projects and skills.",
          resources: ["Resource 1", "Resource 2"],
        },
      ],
      potentialMentors: [
        {
          name: "John Doe - Software Engineer at Google",
          description: "GT Alumni, specializes in machine learning",
          resources: ["Resource 1"],
        },
      ],
      relevantClubs: [
        {
          name: "GT Web Development Club",
          description: "Learn web development skills and work on real projects",
          resources: ["Resource 1"],
        },
      ],
      suggestedCourses: [
        {
          name: "CS 1331 - Introduction to Object-Oriented Programming",
          description: "Fundamental course for computer science majors",
          resources: ["Resource 1"],
        },
      ],
    };
    setGeneratedRoadmap(mockRoadmap);
    setShowRoadmapForm(false);
  };

  return (
    <div className="flex h-screen bg-gradient-to-b from-white to-[#f5f0e0]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#eadaa2] text-[#0d3362] p-6">
        <div className="text-2xl font-bold mb-10">honeycomb.</div>
        <nav>
          <ul className="space-y-2">
            <li className="bg-[#d8c88f] rounded p-2">
              <Link href="/dashboard" className="block">
                Roadmaps
              </Link>
            </li>
            <li className="hover:bg-[#d8c88f] rounded p-2">
              <Link href="/explore" className="block">
                Explore
              </Link>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div className="text-3xl font-bold text-[#0d3362]">
            Hey, {userName}
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded p-2"
            />
            <Image
              src="/avatar-placeholder.png"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </header>

        {!showRoadmapForm && !generatedRoadmap ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-bold mb-4 text-[#0d3362]">
                  Create a Roadmap
                </h2>
                <button
                  className="bg-[#666a86] text-white px-4 py-2 rounded hover:bg-[#555872] transition duration-300"
                  onClick={() => setShowRoadmapForm(true)}
                >
                  Get Started
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-bold mb-4 text-[#0d3362]">
                  Continue Learning
                </h2>
                <button className="bg-[#666a86] text-white px-4 py-2 rounded hover:bg-[#555872] transition duration-300">
                  Resume
                </button>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#0d3362]">
                Your Roadmaps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Placeholder for roadmap items */}
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-[#0d3362]">
                    Software Engineering
                  </h3>
                  <p className="text-gray-600">Progress: 60%</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-[#0d3362]">
                    Data Science
                  </h3>
                  <p className="text-gray-600">Progress: 30%</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-[#0d3362]">
                    UX Design
                  </h3>
                  <p className="text-gray-600">Progress: 45%</p>
                </div>
              </div>
            </section>
          </>
        ) : showRoadmapForm ? (
          <RoadmapForm
            setShowRoadmapForm={setShowRoadmapForm}
            generateRoadmap={handleGenerateRoadmap}
          />
        ) : (
          <RoadmapDisplay roadmap={generatedRoadmap} />
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
