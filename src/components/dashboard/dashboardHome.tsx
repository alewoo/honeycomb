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
    //Insert Tailwind here
    return (
    <>
      
    </>
  );
};

export default DashboardHome;
