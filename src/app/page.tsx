"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "../components/header";
import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import {
  plus_jakarta_sans_regular,
  plus_jakarta_sans_medium,
  plus_jakarta_sans_semibold,
  plus_jakarta_sans_bold,
  plus_jakarta_sans_extrabold,
  messina_book,
} from "./fonts";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion"; // Add this import
import FloatingHoneycomb from "../components/FloatingHoneycomb";
import AnimatedIcon from "../components/AnimatedIcon";

const Home = () => {
  const { theme } = useTheme();

  // Add this animation variant
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <div
        className={`min-h-screen bg-gradient-to-br from-white via-[#f5f0e0] to-[#eadaa2] ${plus_jakarta_sans_regular} relative overflow-hidden`}
      >
        <FloatingHoneycomb />
        <nav className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-gray-800 text-2xl font-bold font-sans hover:text-[#eadaa2] transition duration-300"
          >
            honeycomb.
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 border border-gray-700 bg-white px-4 py-2 rounded-full text-center hover:bg-gray-100 transition duration-300"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#eadaa2] text-white px-4 py-2 rounded-full text-center hover:bg-[#d8c88f] transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        <header className="flex flex-col items-center text-center px-4 py-10 max-w-6xl mx-auto">
          <h1 className="text-[#0d3362] text-[58px] font-bold leading-tight">
            {/* Replace the static text with animated letters */}
            {"design your future with".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <motion.span
            className="text-[#eadaa2] text-[58px] font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            honeycomb.
          </motion.span>
          <p className="mt-6 text-lg md:text-2xl text-gray-600 max-w-2xl">
            Create an account, answer a few questions about your goals, and get
            a personalized roadmap. From projects to mentors and clubs,
            Honeycomb guides you toward landing your dream internship.
          </p>
          <Link
            href="/signup"
            className="mt-8 bg-[#666a86] text-white px-10 py-3 rounded-full hover:bg-[#555872] transition duration-300"
          >
            Get Started
          </Link>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <AnimatedIcon
              path="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              viewBox="0 0 24 24"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Experience</h3>
            <p className="text-gray-600">
              Gain real-world skills through hands-on projects and internships.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <AnimatedIcon
              path="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm10 0a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 014.546 2.914A5.986 5.986 0 0122 21v-2a4 4 0 00-4-4h-1z"
              viewBox="0 0 24 24"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Mentors</h3>
            <p className="text-gray-600">
              Learn from industry experts who guide your professional growth.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <AnimatedIcon
              path="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              viewBox="0 0 24 24"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Clubs</h3>
            <p className="text-gray-600">
              Join diverse communities to explore interests and build
              connections.
            </p>
          </div>
        </section>

        {/* ... rest of the component remains unchanged ... */}
      </div>
    </>
  );
};

export default Home;
