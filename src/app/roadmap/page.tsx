"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from "../fonts";

interface Project {
  "project-name": string;
  description: string;
  "tech-stack": string;
  roadmap: string;
}

interface Club {
  name: string;
  reason: string;
}

interface Course {
  class: string;
  rationale: string;
}

interface Roadmap {
  projects: Project[];
  clubs: Club[];
  classes: Course[];
}

const RoadmapPage = () => {
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const roadmapData = Cookies.get("roadmap_data");

    if (roadmapData) {
      setRoadmap(JSON.parse(roadmapData));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const RoadmapSection = ({
    title,
    items,
    renderItem,
  }: {
    title: string;
    items: any[];
    renderItem: (item: any, index: number) => JSX.Element;
  }) => (
    <div className="mb-8">
      <h2 className={`text-2xl ${plus_jakarta_sans_bold} text-[#0d3362] mb-4`}>
        {title}
      </h2>
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );

  const renderProject = (project: Project, index: number) => (
    <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3
        className={`text-lg ${plus_jakarta_sans_bold} text-[#0d3362] mb-2`}
      >
        {project["project-name"]}
      </h3>
      <p className="text-gray-600 mb-2">{project.description}</p>
      <p className="text-gray-600 mb-2">
        <strong>Tech Stack: </strong> {project["tech-stack"]}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Roadmap: </strong> {project.roadmap}
      </p>
    </div>
  );

  const renderClub = (club: Club, index: number) => (
    <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className={`text-lg ${plus_jakarta_sans_bold} text-[#0d3362] mb-2`}>
        {club.name}
      </h3>
      <p className="text-gray-600 mb-2">{club.reason}</p>
    </div>
  );

  const renderCourse = (course: Course, index: number) => (
    <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className={`text-lg ${plus_jakarta_sans_bold} text-[#0d3362] mb-2`}>
        {course.class}
      </h3>
      <p className="text-gray-600 mb-2">{course.rationale}</p>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gray-100 ${plus_jakarta_sans_regular}`}>
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <Link
          href="/dashboard"
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
          Your Personalized Roadmap
        </h1>

        {loading ? (
          <div className="text-center">
            <p className="text-xl text-gray-600">Loading your roadmap...</p>
          </div>
        ) : roadmap ? (
          <>
            <RoadmapSection
              title="Recommended Projects"
              items={roadmap.projects}
              renderItem={renderProject}
            />
            <RoadmapSection
              title="Relevant Clubs"
              items={roadmap.clubs}
              renderItem={renderClub}
            />
            <RoadmapSection
              title="Suggested Courses"
              items={roadmap.classes}
              renderItem={renderCourse}
            />
          </>
        ) : (
          <div className="text-center">
            <p className="text-xl text-gray-600">
              No roadmap found. Please generate a roadmap from the dashboard.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default RoadmapPage;
