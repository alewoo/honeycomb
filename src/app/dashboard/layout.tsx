"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Sidebar from '@/components/dashboard/sidebar';
import Image from "next/image";
import Images from '../../assets/images';
import Link from 'next/link';
// import { useSession } from 'next-auth/react';

// import { getServerSession } from "next-auth/next"
// import { authOptions } from "../api/auth/[...nextauth]/route"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  plus_jakarta_sans_regular,
  plus_jakarta_sans_medium,
  plus_jakarta_sans_semibold,
  plus_jakarta_sans_bold,
  plus_jakarta_sans_extrabold,
  messina_book,
  messina_semibold
} from '../fonts';

import { createClient } from 'utils/supabase/client'
import { redirect } from 'next/navigation'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [selectedTab, setSelectedTab] = useState('dashboard');

  return (
    <>
      <div className="w-[1400px] h-[1000px] relative bg-white">
        <div className="w-[1600px] h-[1200px] left-0 top-0 absolute bg-white" />
        <div className="w-[1028px] h-[191.20px] left-[187px] top-[659px] absolute">
          <div className="w-[401px] h-[109px] left-[312px] top-[1px] absolute">
          </div>
          <div className="w-[228px] h-[163.20px] left-[800px] top-0 absolute">
            <div className="w-[228px] left-0 top-[135.20px] absolute text-center text-[#151438]/40 text-lg font-medium font-['DM Sans'] leading-7">Join the Right Clubs</div>
            <img className="w-[170px] h-[110px] left-[28px] top-0 absolute rounded-[10px]" src="https://via.placeholder.com/170x110" />
          </div>
          <div className="w-[228px] h-[163.20px] left-[400px] top-0 absolute">
            <div className="w-[228px] left-0 top-[135.20px] absolute text-center text-[#151438]/40 text-lg font-medium font-['DM Sans'] leading-7">Connect with Mentors</div>
            <img className="w-[170px] h-[110px] left-[28px] top-0 absolute rounded-[10px]" src="https://via.placeholder.com/170x110" />
          </div>
          <div className="w-[228px] h-[191.20px] left-0 top-0 absolute">
            <div className="w-[228px] left-0 top-[135.20px] absolute text-center text-[#151438]/40 text-lg font-medium font-['DM Sans'] leading-7">Get Real-World Experience</div>
            <img className="w-[170px] h-[110px] left-[28px] top-0 absolute rounded-[10px]" src="https://via.placeholder.com/170x110" />
          </div>
        </div>
        <div className="w-[714px] h-96 left-[344px] top-[161px] absolute">
          <div className="w-[268px] h-[60px] left-[223px] top-[324px] absolute">
            <div className="w-[268px] h-[60px] left-0 top-0 absolute bg-[#666a86] rounded-[100px]" />
            <div className="left-[79px] top-[17px] absolute text-center text-white text-xl font-medium font-['DM Sans'] leading-relaxed">Get Started</div>
          </div>
          <div className="w-[625px] left-[44px] top-[159px] absolute text-center text-[#151438]/40 text-[22px] font-medium font-['DM Sans'] leading-loose">Create an account, answer a few questions about your goals, and get a personalized roadmap. From projects to mentors and clubs, Honeycomb guides you toward landing your dream internship.</div>
          <div className="w-[714px] left-0 top-0 absolute text-center">
            <span className="text-[#0d3362] text-[58px] font-bold font-['DM_Sans'] leading-[70px]">
              design your future with
            </span>
            <span className="text-[#eadaa2] text-[58px] font-bold font-['DM_Sans'] leading-[70px]">
              honeycomb.
            </span>
          </div>
        </div>
        <div className="w-[972px] h-10 left-[213px] top-[36px] absolute">
          <div className="w-[172px] h-10 left-[800px] top-0 absolute">
            <div className="w-[100px] h-10 left-[72px] top-0 absolute">
              <div className="w-[100px] h-10 left-0 top-0 absolute bg-[#eadaa2] rounded-[100px]" />
              <div className="left-[18px] top-[7px] absolute text-center text-white text-lg font-medium font-['DM Sans'] leading-relaxed">Sign Up</div>
            </div>
            <div className="left-0 top-[7px] absolute text-[#666a86] text-base font-medium font-['DM Sans'] leading-snug">Login</div>
          </div>
          <div className="w-[352px] h-[22px] left-[310px] top-[9px] absolute">
            <div className="left-[290px] top-0 absolute text-[#151438]/40 text-base font-medium font-['DM Sans'] leading-snug">Support</div>
            <div className="left-[220px] top-0 absolute text-[#151438]/40 text-base font-medium font-['DM Sans'] leading-snug">F.A.Q.</div>
            <div className="left-[142px] top-0 absolute text-[#151438]/40 text-base font-medium font-['DM Sans'] leading-snug">About</div>
            <div className="left-[65px] top-0 absolute text-[#151438]/40 text-base font-medium font-['DM Sans'] leading-snug">Prices</div>
            <div className="left-0 top-0 absolute text-[#151438]/40 text-base font-medium font-['DM Sans'] leading-snug">Tour</div>
          </div>
          <div className="w-[111px] h-[19px] left-0 top-[5px] absolute justify-center items-center inline-flex">
            <div className="text-center text-[#333333] text-2xl font-bold font-['DM Sans']">honeycomb.</div>
          </div>
        </div>
      </div>
    </>
  );
}
