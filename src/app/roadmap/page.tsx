"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import RoadmapDisplay from "@/components/RoadmapDisplay"; // Assuming you have a component for displaying roadmaps
import { useRouter } from "next/navigation";

const RoadmapPage = () => {
  const [roadmapData, setRoadmapData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve the roadmap data from cookies
    const roadmapCookie = Cookies.get("roadmap_data");

    if (roadmapCookie) {
      // Parse and set the roadmap data
      setRoadmapData(JSON.parse(roadmapCookie));
    } else {
      // If no roadmap data, redirect back to dashboard or handle accordingly
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Generated Roadmap</h1>
      {roadmapData ? (
        <RoadmapDisplay roadmap={roadmapData} />
      ) : (
        <p>Loading roadmap data...</p>
      )}
    </div>
  );
};

export default RoadmapPage;
