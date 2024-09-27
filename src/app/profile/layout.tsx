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

import { createClient } from 'utils/supabase/client'
import { redirect } from 'next/navigation'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient()

//   const { data: { user }, error } = await supabase.auth.getUser()
//   if (error || !user) {
//     redirect('/login')
//   }

  function renderDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }

  const [showAddPost, setShowAddPost] = useState(false);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [selectedTab, setSelectedTab] = useState('profile');

  return (
    <div className={`flex flex-row min-h-screen w-full ${showAddPost ? 'blur-sm' : ''}`}>
      <Sidebar /> 
      <div className="w-full">

        <div className="">
          {/* {selectedTicker ? (
            <ViewTicker tickerAbbreviation={selectedTicker} onClose={() => setSelectedTicker(null)} open={true} />
          ) : selectedReport ? (
            <ViewReport reportId={selectedReport} onClose={() => setSelectedReport(null)} open={true} />
          ) : ( */}
            <>
              {children}
            </>
          {/* )} */}
        </div>
      </div>
      <div className="flex flex-row gap-[24px] align-center items-center fixed bottom-8 left-1/2 transform -translate-x-1/2 p-[16px] transition-all border border-zinc-700 duration-200 bg-zinc-900 rounded-2xl">
        <button
          className=""
          onClick={() => {/* Add your onClick handler here */}}
        >
          <Image
            src={Images.magic}
            alt="Close"
            width={16}
            height={16}
            className="transition-all duration-200 "
          />
        </button>
        <button
          className=""
          onClick={() => {/* Add your onClick handler here */}}
        >
          <Image
            src={Images.search}
            alt="Close"
            width={16}
            height={16}
            className="transition-all duration-200 "
          />
        </button>
        <div className="w-[1px] h-[15px] bg-[#595A5B]"></div>

        <button
          className=""
          onClick={() => {/* Add your onClick handler here */}}
        >
          <Image
            src={Images.home}
            alt="Close"
            width={16}
            height={16}
            className="transition-all duration-200"
          />
        </button>
        <button
          className=""
          onClick={() => {/* Add your onClick handler here */}}
        >
          <Image
            src={Images.explore}
            alt="Close"
            width={16}
            height={16}
            className="transition-all duration-200 "
          />
        </button>
                <button
          className=""
          onClick={() => {/* Add your onClick handler here */}}
        >
          <Image
            src={Images.bookmark}
            alt="Close"
            width={16}
            height={16}
            className="transition-all duration-200 "
          />
        </button>
                <button
          className=""
          onClick={() => {/* Add your onClick handler here */}}
        >
          <Image
            src={Images.settings}
            alt="Close"
            width={16}
            height={16}
            className="transition-all duration-200 "
          />
        </button>
        <div className="w-[1px] h-[15px] bg-[#595A5B]"></div>
        <button
          className=""
          onClick={() => {/* Add your onClick handler here */}}
        >
          <p>New post</p>
        </button>
      </div>

    </div>
  );
}
