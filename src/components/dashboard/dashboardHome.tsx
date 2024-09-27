"use client";

import React, { useState, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { createClient } from 'utils/supabase/client'
import Image from "next/image";
import Images from '../../assets/images';
import {
  plus_jakarta_sans_regular,
  plus_jakarta_sans_medium,
  plus_jakarta_sans_semibold,
  plus_jakarta_sans_bold,
  messina_book,
  crimson_regular
} from '../../app/fonts';

// const Watchlist = dynamic(() => import('./watchlist'), { ssr: false });
// const TopStories = dynamic(() => import('./topStories'), { ssr: false });
// const MyReports = dynamic(() => import('./myReports'), { ssr: false });
// const OverallNews = dynamic(() => import('./overallNews'), { ssr: false });
// const ViewReport = dynamic(() => import('@/components/viewReport'), { ssr: false });
// const ViewTicker = dynamic(() => import('@/components/viewTicker'), { ssr: false });
// const SearchTicker = dynamic(() => import('@/components/searchTicker'), { ssr: false });

const DashboardHome = () => {

    function getDaysInMonth() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    function getFirstDayOfMonth() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    }

    return (
    <>
      <div className="w-full px-10 py-8 flex items-center justify-between flex-row border-b border-solid  border-[#28282D]">
        <div className='flex flex-col space-y-4'>
            <div className="flex flex-row space-x-2.5 items-center">
                <h1 className={`text-xs text-zinc-500 font-bold ${plus_jakarta_sans_semibold.className}`}>
                    {getGreeting()}
                </h1>
                <div className="w-[4px] h-[4px] bg-zinc-700 rounded-full"></div>
                <p className={`text-xs text-zinc-500 ${plus_jakarta_sans_regular.className}`}>You have 4 new contributions today, and 4 goals this week.</p>
            </div>
            <div className="space-y-2">
                <div className="flex flex-row space-x-2 items-center">
                    <p className={`text-sm text-zinc-500 font-italic ${plus_jakarta_sans_medium.className}`}>My vision statement</p>
                    <button className="px-2 py-1 rounded-lg bg-zinc-600">
                        <p className={`text-xs ${plus_jakarta_sans_semibold.className}`}>Switch</p>
                    </button>
                </div>
                <h1 className={`text-4xl font-bold ${crimson_regular.className}`}>
                    I will reach 10,000 users with my project, SellRaze.
                </h1>
            </div>
        </div>

        <div>
          <div className="flex flex-col items-start space-y-2">
            {/* <p className={`text-md text-zinc-500 ${plus_jakarta_sans_medium.className} tracking-[5px] mb-2`}>AUG 2024</p>
            <div className=" grid grid-rows-4 gap-1" style={{ gridTemplateColumns: `repeat(${Math.ceil(getDaysInMonth() / 4)}, 1fr)` }}>
              {Array.from({ length: getDaysInMonth() }, (_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-[#27A641] rounded-[3px]"
                ></div>
              ))}
            </div> */}
            <div className="flex flex-row space-x-0.5">
                <p className={`text-xs text-zinc-300 ${plus_jakarta_sans_semibold.className}`}>Vision declared on</p>
                <p className={`text-xs text-zinc-300 ${plus_jakarta_sans_medium.className}`}>Aug 28, 2024</p>
            </div>
            <div className="flex flex-row rounded-xl bg-zinc-800 p-4 items-center space-x-8">
                <div className="flex flex-col space-y-0.5">
                    <p className={`text-sm text-zinc-300 ${plus_jakarta_sans_semibold.className}`}>Updates logged</p>
                    <button className='flex flex-row items-start'>
                        <p className={`text-xs text-zinc-500 ${plus_jakarta_sans_medium.className}`}>View all</p>
                    </button>
                </div>
                <p className={`text-6xl text-zinc-300 ${crimson_regular.className}`}>82</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 py-4 justify-between flex flex-row w-full">
        <button className="flex flex-row items-center gap-1.5 opacity-70 hover:opacity-100 transition-all">
          <Image src={Images.filter} alt="Filter" width={18} height={18} />
          <p className={`${plus_jakarta_sans_semibold.className} font-semibold`}>Filter</p>
        </button>
        <button className="flex flex-row items-center gap-1.5 opacity-70 hover:opacity-100 transition-all">
          <Image src={Images.display} alt="Filter" width={18} height={18} />
          <p className={`${plus_jakarta_sans_semibold.className} font-semibold`}>Display</p>
        </button>
      </div>
      <div className="px-2.5 py-4 space-x-2.5 flex flex-row w-full bg-zinc-900">
        <button className="opacity-70 hover:opacity-100 transition-all py-1 px-1.5 bg-zinc-950 rounded-sm">
          <Image src={Images.plusThick} alt="Filter" width={10} height={10} />
        </button>
        <div className="flex flex-row items-center gap-3">
          <button className="opacity-70 hover:opacity-100 transition-all">
            <Image src={Images.notDone} alt="Filter" width={16} height={16} />
          </button>
          <div className="flex flex-row space-x-2">
            <p className={`${plus_jakarta_sans_semibold.className} font-semibold`}>Finish Text-to-Listing API</p>
            <p className={`${plus_jakarta_sans_regular.className} font-semibold`}>4</p>
          </div>
        </div>
      </div>
      <div className="px-10 flex flex-col w-full">
        <div className="flex flex-row w-full justify-between items-center py-4 border-b border-zinc-800">
          <div className="flex flex-row items-center gap-6">
            <button className="opacity-70 hover:opacity-100 transition-all">
              <Image src={Images.notDone} alt="Filter" width={16} height={16} />
            </button>
            <div className="flex flex-row space-x-2 items-center align-center">
              <p className={`${plus_jakarta_sans_semibold.className} font-semibold text-sm`}>26</p>
              <p className={`${plus_jakarta_sans_medium.className} font-semibold text-xs`}>Aug</p>
              <div className="w-[1px] h-[12px] bg-zinc-700"></div>
              <p className={`${plus_jakarta_sans_medium.className} font-semibold text-xs`}>7:45 PM</p>
            </div>
            <div className="flex flex-row space-x-2">
              <button className='flex flex-row space-x-1.5 items-center'>
                <Image src={Images.github} alt="Filter" className="border border-white bg-white rounded-full" width={18} height={18} />
                <p className={`${plus_jakarta_sans_semibold.className} text-sm font-semibold`}>Feature: final touches to text to listing API</p>
                <Image src={Images.redirect} alt="Filter" width={8} height={8} />
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700">
            <div className="w-[6px] h-[6px] bg-orange-300 rounded-full"></div>
            <p className={`${plus_jakarta_sans_regular.className} text-orange-600 font-semibold text-xs`}>Dev</p>
          </div>
        </div>

        <div className="flex flex-row w-full justify-between items-center py-4 border-b border-zinc-800">
          <div className="flex flex-row items-center gap-6">
            <button className="opacity-70 hover:opacity-100 transition-all">
              <Image src={Images.notDone} alt="Filter" width={16} height={16} />
            </button>
            <div className="flex flex-row space-x-2 items-center align-center">
              <p className={`${plus_jakarta_sans_semibold.className} font-semibold text-sm`}>26</p>
              <p className={`${plus_jakarta_sans_medium.className} font-semibold text-xs`}>Aug</p>
              <div className="w-[1px] h-[12px] bg-zinc-700"></div>
              <p className={`${plus_jakarta_sans_medium.className} font-semibold text-xs`}>7:45 PM</p>
            </div>
            <div className="flex flex-row space-x-2">
              <button className='flex flex-row space-x-1.5 items-center'>
                <Image src={Images.figma} alt="Filter" className="border border-zinc-700 rounded-full" width={18} height={18} />
                <p className={`${plus_jakarta_sans_semibold.className} text-sm font-semibold`}>Changes to SellRaze UI</p>
                <Image src={Images.redirect} alt="Filter" width={8} height={8} />
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700">
            <div className="w-[6px] h-[6px] bg-blue-300 rounded-full"></div>
            <p className={`${plus_jakarta_sans_regular.className} text-blue-600 font-semibold text-xs`}>Design</p>
          </div>
        </div>

        <div className="flex flex-row w-full justify-between items-center py-4 border-b border-zinc-800">
          <div className="flex flex-row items-center gap-6">
            <button className="opacity-70 hover:opacity-100 transition-all">
              <Image src={Images.notDone} alt="Filter" width={16} height={16} />
            </button>
            <div className="flex flex-row space-x-2 items-center align-center">
              <p className={`${plus_jakarta_sans_semibold.className} font-semibold text-sm`}>26</p>
              <p className={`${plus_jakarta_sans_medium.className} font-semibold text-xs`}>Aug</p>
              <div className="w-[1px] h-[12px] bg-zinc-700"></div>
              <p className={`${plus_jakarta_sans_medium.className} font-semibold text-xs`}>7:45 PM</p>
            </div>
            <div className="flex flex-row space-x-2">
              <button className='flex flex-row space-x-1.5 items-center'>
                <Image src={Images.github} alt="Filter" className="border border-white bg-white rounded-full" width={18} height={18} />
                <p className={`${plus_jakarta_sans_semibold.className} text-sm font-semibold`}>Feature: final touches to text to listing API</p>
                <Image src={Images.redirect} alt="Filter" width={8} height={8} />
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700">
            <div className="w-[6px] h-[6px] bg-orange-300 rounded-full"></div>
            <p className={`${plus_jakarta_sans_regular.className} text-orange-600 font-semibold text-xs`}>Dev</p>
          </div>
        </div>
                <div className="flex flex-row w-full justify-between items-center py-4 border-b border-zinc-800">
          <div className="flex flex-row items-center gap-6">
            <button className="opacity-70 hover:opacity-100 transition-all">
              <Image src={Images.notDone} alt="Filter" width={16} height={16} />
            </button>
            <div className="flex flex-row space-x-2 items-center align-center">
              <p className={`${plus_jakarta_sans_semibold.className} font-semibold text-sm`}>26</p>
              <p className={`${plus_jakarta_sans_medium.className} font-semibold text-xs`}>Aug</p>
              <div className="w-[1px] h-[12px] bg-zinc-700"></div>
              <p className={`${plus_jakarta_sans_medium.className} font-semibold text-xs`}>7:45 PM</p>
            </div>
            <div className="flex flex-row space-x-2">
              <button className='flex flex-row space-x-1.5 items-center'>
                <Image src={Images.github} alt="Filter" className="border border-white bg-white rounded-full" width={18} height={18} />
                <p className={`${plus_jakarta_sans_semibold.className} text-sm font-semibold`}>Feature: final touches to text to listing API</p>
                <Image src={Images.redirect} alt="Filter" width={8} height={8} />
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700">
            <div className="w-[6px] h-[6px] bg-orange-300 rounded-full"></div>
            <p className={`${plus_jakarta_sans_regular.className} text-orange-600 font-semibold text-xs`}>Dev</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
