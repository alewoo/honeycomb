import React from "react";

interface RoadmapDisplayProps {
  roadmap: {
    recommendedProjects: Array<{
      title: string;
      description: string;
      resources: string[];
    }>;
    potentialMentors: Array<{
      name: string;
      description: string;
      resources: string[];
    }>;
    relevantClubs: Array<{
      name: string;
      description: string;
      resources: string[];
    }>;
    suggestedCourses: Array<{
      name: string;
      description: string;
      resources: string[];
    }>;
  };
}

const RoadmapDisplay: React.FC<RoadmapDisplayProps> = ({ roadmap }) => {
  const renderSection = (title: string, items: any[]) => (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[#0d3362]">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-[#0d3362]">
              {item.name || item.title}
            </h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.resources.map((resource: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-[#eadaa2] text-[#0d3362] px-2 py-1 rounded text-sm"
                >
                  {resource}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[#0d3362] mb-6">
        Your Personalized Roadmap
      </h1>
      {renderSection("Recommended Projects", roadmap.recommendedProjects)}
      {renderSection("Potential Mentors", roadmap.potentialMentors)}
      {renderSection("Relevant Clubs", roadmap.relevantClubs)}
      {renderSection("Suggested Courses", roadmap.suggestedCourses)}
    </div>
  );
};

export default RoadmapDisplay;
