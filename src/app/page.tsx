"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
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
import DashedDivider from "../components/dashedDivider";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className={`min-h-screen bg-white ${plus_jakarta_sans_regular}`}>
        <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <div className="text-center text-gray-800 text-2xl mt-10 font-bold font-sans">
            honeycomb.
          </div>
          <div className="flex items-center mt-10 space-x-4">
            <a
              href="/login"
              className="text-gray-700 border border-gray-700 bg-white px-4 py-2 rounded-full text-center"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-[#eadaa2] text-white px-4 py-2 rounded-full text-center"
            >
              Sign Up
            </a>
          </div>
        </nav>

        <header className="flex flex-col items-center text-center px-4 py-10 max-w-6xl mx-auto">
          <h1 className="text-[#0d3362] text-[58px] font-bold leading-tight">
            design your future with
          </h1>
          <span className="text-[#eadaa2] text-[58px] font-bold">
            honeycomb.
          </span>
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

        <section className="px-4 py-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                className="w-40 h-28 rounded-lg"
                src="https://via.placeholder.com/170x110"
                alt="Experience"
              />
              <p className="mt-4 text-center text-gray-600 font-medium">
                Get Real-World Experience
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-40 h-28 rounded-lg"
                src="https://via.placeholder.com/170x110"
                alt="Mentors"
              />
              <p className="mt-4 text-center text-gray-600 font-medium">
                Connect with Mentors
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-40 h-28 rounded-lg"
                src="https://via.placeholder.com/170x110"
                alt="Clubs"
              />
              <p className="mt-4 text-center text-gray-600 font-medium">
                Join the Right Clubs
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
