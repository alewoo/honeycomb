"use client";

import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { plus_jakarta_sans_regular, plus_jakarta_sans_bold } from "../fonts";
import Link from "next/link";

const Login = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div
      className={`min-h-screen bg-white ${plus_jakarta_sans_regular} flex flex-col`}
    >
      <nav className="flex justify-start px-6 py-4">
        <div className="text-gray-800 text-2xl font-bold font-sans">
          honeycomb.
        </div>
      </nav>

      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full px-6">
          <h1
            className={`text-[#0d3362] text-4xl ${plus_jakarta_sans_bold} text-center mb-8 font-bold`}
          >
            Sign In
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eadaa2]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#eadaa2] text-white py-2 rounded-full hover:bg-[#d8c88f] transition duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#eadaa2] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
