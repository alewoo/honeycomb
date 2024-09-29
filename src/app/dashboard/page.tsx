"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import jwt from "jsonwebtoken"; // Import for decoding JWT
import Cookies from "js-cookie"; // Import for handling cookies
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RoadmapForm from "@/components/dashboard/RoadmapForm";

const DashboardPage = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<{ email: string; userId: string; name: string; careerPath: string; interests: string } | null>(null);
  const [showRoadmapForm, setShowRoadmapForm] = useState(false);

  // Fetch and decode user data from the cookie
  useEffect(() => {
    const token = Cookies.get("auth_token");

    if (token) {
      try {
        const decodedUser = jwt.decode(token) as { email: string; userId: string };

        const userDataCookie = Cookies.get("user_data");
        if (userDataCookie) {
          const userDataObject = JSON.parse(userDataCookie);
          setUserData(userDataObject);
        } else {
          const fetchUserData = async () => {
            const response = await fetch("/api/user", {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
              const data = await response.json();
              Cookies.set("user_data", JSON.stringify(data), { expires: 1 });
              setUserData(data);
            } else {
              router.push("/login");
            }
          };

          fetchUserData();
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      router.push("/login");
    }
  }, [router]);

  // Function to generate a roadmap by calling the API (projects-prompt.js)
  const handleGenerateRoadmap = async (formData: any) => {
    console.log("Roadmap form data submitted:", formData);
  
    try {
      // Call the API route
      const response = await fetch("/api/generate-roadmap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const roadmap = await response.json();
  
        // Store the generated roadmap in cookies
        Cookies.set("roadmap_data", JSON.stringify(roadmap), { expires: 1 });
  
        // Redirect to the roadmap page
        router.push("/roadmap");
      } else {
        console.error("Error generating roadmap:", await response.json());
      }
    } catch (error) {
      console.error("Unexpected error during roadmap generation:", error);
    }
  };
  

  /** Handle signout */
  const handleSignout = async () => {
    try {
      const response = await fetch("/api/signout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        Cookies.remove("auth_token");
        Cookies.remove("user_data");
        window.location.href = "/";
      } else {
        console.error("Error logging out:", await response.json());
      }
    } catch (error) {
      console.error("Unexpected error during logout:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-b from-white to-[#f5f0e0]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#eadaa2] text-[#0d3362] p-6 flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="text-2xl font-bold mb-10">honeycomb.</div>

        {/* Navigation Section */}
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
            {/* Sign Out Button */}
            <li className="hover:bg-[#d8c88f] rounded p-2">
              <button
                onClick={handleSignout} // Ensure you have the handleSignout function
                className="w-full text-left text-[#0d3362]">
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div className="text-3xl font-bold text-[#0d3362]">
            Hey, {userData?.name || "User"}
          </div>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search" className="border rounded p-2" />
            <Image
              src="/avatar-placeholder.png"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </header>

        {!showRoadmapForm ? (
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
          </>
        ) : (
          <RoadmapForm
            setShowRoadmapForm={setShowRoadmapForm}
            generateRoadmap={handleGenerateRoadmap} // Pass handleGenerateRoadmap to RoadmapForm
          />
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
