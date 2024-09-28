"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from "../fonts";
import { format, getDaysInMonth, startOfMonth, addMonths, subMonths } from 'date-fns';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  /** State to store the current date (month/year) */
  const [currentDate, setCurrentDate] = useState(new Date());

  /** Function to handle previous month navigation */
  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  /** Function to handle next month navigation */
  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  /** Redirect to landing page on signout */
  const handleSignout = () => {
    router.push('/'); /** Replace with the landing page route */
  };

  /** Get details for the current month */
  const monthName = format(currentDate, 'MMMM'); // Full month name
  const year = format(currentDate, 'yyyy'); // Year
  const daysInMonth = getDaysInMonth(currentDate); // Number of days in the current month
  const firstDayOfMonth = startOfMonth(currentDate); // Get the first day of the month
  const startDay = format(firstDayOfMonth, 'i'); // Day of the week as a number (1=Monday, 7=Sunday)

  /** Create an array of days to render in the calendar */
  const daysArray = Array.from({ length: daysInMonth }, (_, day) => day + 1);

  /** State for handling the roadmap form */
  const [showRoadmapForm, setShowRoadmapForm] = useState(false);
  const [roadmapData, setRoadmapData] = useState({
    careerPath: "",
    targetCompanies: "",
    interests: "",
  });

  /** Handle input change in form */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRoadmapData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /** Handle roadmap form submission */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Roadmap data submitted:", roadmapData);
    // For now, we'll just log it and show an alert
    alert("Roadmap creation initiated! Check the console for details.");
    setShowRoadmapForm(false); // Close form after submission
  };

  return (
    <div className={`min-h-screen bg-white flex flex-col ${plus_jakarta_sans_regular}`}>
      {/* Header Section */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <Link
          href="/"
          className="text-gray-800 text-2xl font-bold font-sans hover:text-[#eadaa2] transition duration-300">
          honeycomb.
        </Link>
        <button className="text-gray-600 hover:text-gray-800">Logout</button>
      </nav>

      {/* Main Dashboard Section */}
      <div className="flex flex-row w-full">
        {/* Main Content (Dashboard and Cards) */}
        <div className="w-3/4 p-8 border-r pt-5 border-gray-300"> {/* Vertical Divider Here */}
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold text-[#0d3362]">Dashboard</h2>
            <button
              onClick={() => setShowRoadmapForm(true)}
              className="bg-[#EADAA2] text-gray-800 px-4 py-2 rounded-full hover:bg-[#d1b074] transition duration-300"
            >
              Generate New Roadmap
            </button>
          </div>

          {!showRoadmapForm ? (
            //Dashboard card views
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
              {/* Example Card */}
              <div className="bg-gray-100 rounded-xl shadow-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-[#EADAA2] rounded-full flex items-center justify-center">A</span>
                    <div className="ml-4">
                      <p className="font-bold text-gray-700">Header</p>
                      <p className="text-sm text-gray-500">Subhead</p>
                    </div>
                  </div>
                  <div className="text-gray-400">•••</div>
                </div>
                <div className="h-48 bg-gray-300 rounded-xl flex justify-center items-center">
                  <div className="w-20 h-20 bg-gray-400"></div>
                </div>
              </div>

              {/* Repeat for additional cards */}
            </div>
          ) : (
            //New Roadmap Form
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 mt-14">
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
          {/* Dashboard Grid */}
          
        </div>

        {/* Sidebar Right (Tasks and Calendar) */}
        <div className="w-1/4 p-6 flex flex-col">
          {/* Sidebar Header */}
          <div className="flex justify-between mt-5 items-center mb-4">
            <h3 className="text-xl text-gray-800 font-bold">Tasks</h3>
            <button className="text-gray-500">X</button>
          </div>

          {/* Calendar Section */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex justify-between items-center">
              <button onClick={handlePrevMonth} className="text-[#EADAA2]">◀</button>
              <p className="font-bold text-gray-700 mb-2">{monthName} {year}</p>
              <button onClick={handleNextMonth} className="text-[#EADAA2]">▶</button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-gray-700">
              {/* Days of the week */}
              <span className="font-bold">S</span>
              <span className="font-bold">M</span>
              <span className="font-bold">T</span>
              <span className="font-bold">W</span>
              <span className="font-bold">T</span>
              <span className="font-bold">F</span>
              <span className="font-bold">S</span>
              {/* Empty slots for days before the 1st */}
              {Array.from({ length: Number(startDay) - 1 }).map((_, index) => (
                <span key={index}></span>
              ))}
              {/* Days of the month */}
              {daysArray.map((day) => (
                <span
                  key={day}
                  className={`p-2 ${
                    day === new Date().getDate() ? 'bg-[#EADAA2] text-white rounded-full' : 'text-gray-400'
                  }`}
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Task List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-[#EADAA2] rounded-full flex items-center justify-center">A</span>
                <p className="ml-4 font-medium text-gray-700">List item</p>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">100+</span>
                <input type="checkbox" className="form-checkbox text-[#EADAA2]" />
              </div>
            </div>

            {/* Repeat for additional tasks */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
