"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken'; // Import for decoding JWT
import Cookies from 'js-cookie'; // Import for handling cookies

// Fonts
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from "../fonts";
import { Console } from 'console';

// Components
const RoadmapForm = dynamic(() => import('@/components/dashboard/RoadmapForm'), { ssr: false });
const DashboardSidebar = dynamic(() => import('@/components/dashboard/dashboardSidebar'), { ssr: false });
const DashboardGrid = dynamic(() => import('@/components/dashboard/dashboardGrid'), { ssr: false });

const Dashboard = () => {
  const router = useRouter();

  // State to hold user data fetched from the cookie
  const [userData, setUserData] = useState<{ email: string; userId: string; name: string; careerPath: string; interests: string } | null>(null); 
  const [showRoadmapForm, setShowRoadmapForm] = useState(false);

  // Fetch and decode user data from the cookie
  useEffect(() => {
    const token = Cookies.get('auth_token'); // Retrieve the JWT token from cookies
    
    if (token) {
      try {
        // Decode the token (just to retrieve the email/userId for now)
        const decodedUser = jwt.decode(token) as { email: string; userId: string }; 

        // Check if 'user_data' cookie exists
        const userDataCookie = Cookies.get('user_data');
        if (userDataCookie) {
          console.log("parsing user cookie");
          // Parse the 'user_data' cookie which contains all user data in JSON format
          const userDataObject = JSON.parse(userDataCookie);
          setUserData(userDataObject); // Set the user data in state
        } else {
          // Fetch the complete user profile from the /api/user route
          const fetchUserData = async () => {
            const response = await fetch('/api/user', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
            });

            if (response.ok) {
              const data = await response.json();

              // Store the complete user data as a JSON string in the cookie
              Cookies.set('user_data', JSON.stringify(data), { expires: 1 }); // Store user data in a single cookie

              setUserData(data); // Set the user data in local state
            } else {
              console.error('Failed to fetch user data');
              router.push('/login'); // Redirect to login if there's an error
            }
          };

          fetchUserData(); // Fetch user data from the API if it's not in cookies
        }
      } catch (error) {
        console.error('Error decoding token or processing user data:', error);
      }
    } else {
      // If no token, redirect to login or handle accordingly
      console.warn('No token found');
      router.push('/login'); // Redirect to login page if not authenticated
    }
  }, [router]);

  /** Handle signout */
  const handleSignout = async () => {
    try {
      const response = await fetch('/api/signout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        console.log('Logout successful');
        // Clear the cookies after logout
        Cookies.remove('auth_token');
        Cookies.remove('user_data'); // Clear the stored user data cookie
        // Redirect the user to the login or home page
        window.location.href = '/';
      } else {
        console.error('Error logging out:', await response.json());
      }
    } catch (error) {
      console.error('Unexpected error during logout:', error);
    }
  };

  return (
    <div className={`min-h-screen bg-white flex flex-col ${plus_jakarta_sans_regular}`}>
      {/* Header Section */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <Link
          href="/dashboard"
          className="text-gray-800 text-2xl font-bold font-sans hover:text-[#eadaa2] transition duration-300">
          honeycomb.
        </Link>
        <div>
          {userData && (
            <>
              <span className="mr-4 text-gray-600 mr-10">Welcome, {userData.name} ({userData.email})</span>
            </>
          )}
          <button onClick={handleSignout} className="text-gray-600 hover:text-gray-800">Signout</button>
        </div>
      </nav>

      {/* Main Dashboard Section */}
      <div className="flex flex-row w-full h-full flex-grow">
        {/* Main Content (Dashboard and Cards) */}
        <div className="w-3/4 p-8 border-r pt-5 border-gray-300">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold text-[#0d3362]">Dashboard</h2>
            <button
              onClick={() => setShowRoadmapForm(true)}
              className="bg-[#EADAA2] text-gray-800 px-4 py-2 rounded-full hover:bg-[#d1b074] transition duration-300">
              Generate New Roadmap
            </button>
          </div>

          {!showRoadmapForm ? (
            //Dashboard card views
            <DashboardGrid />
          ) : (
            //New Roadmap Form
            <RoadmapForm setShowRoadmapForm={setShowRoadmapForm} />
          )}
        </div>

        {/* Sidebar Right (Tasks and Calendar) */}
        <DashboardSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
