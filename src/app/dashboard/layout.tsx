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

  const [selectedTab, setSelectedTab] = useState('dashboard');

  return (
    <div className={`flex flex-row min-h-screen w-full ${showAddPost ? 'blur-sm' : ''}`}>
      <Sidebar />
      <div className="w-full">
        <div className="flex flex-row justify-between items-center pl-10 pr-4  py-4 border-b border-zinc-900">
          <div className="flex flex-row items-center">
            <button 
              className={`px-2 py-1 rounded-lg transition-colors duration-200 ease-in-out ${selectedTab === 'dashboard' ? 'bg-zinc-700' : ''}`}
              onClick={() => setSelectedTab('dashboard')}
            >
              <p className={`text-xs text-zinc-300 ${plus_jakarta_sans_semibold.className}`}>My dashboard</p>
            </button>
            <button 
              className={`px-2 py-1 rounded-lg transition-colors duration-200 ease-in-out ${selectedTab === 'updates' ? 'bg-zinc-700' : ''}`}
              onClick={() => setSelectedTab('updates')}
            >
              <p className={`text-xs text-zinc-300 ${plus_jakarta_sans_semibold.className}`}>My updates</p>
            </button>
            <button 
              className={`px-2 py-1 rounded-lg transition-colors duration-200 ease-in-out ${selectedTab === 'group' ? 'bg-zinc-700' : ''}`}
              onClick={() => setSelectedTab('group')}
            >
              <p className={`text-xs text-zinc-300 ${plus_jakarta_sans_semibold.className}`}>My group</p>
            </button>
          </div>

          <Button href="mailto:hello@startup.exchange" variant="secondary" className={`px-6 gap-x-2 w-full md:w-auto ${messina_semibold.className}`}>
            <Image src={Images.plusThickDark} alt="Filter" width={10} height={10} />
            ADD AN UPDATE
            </Button>

        </div>
        

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
