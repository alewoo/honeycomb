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
  plus_jakarta_sans_extrabold,
  messina_book
} from '../fonts';

// const Watchlist = dynamic(() => import('./watchlist'), { ssr: false });
// const TopStories = dynamic(() => import('./topStories'), { ssr: false });
// const MyReports = dynamic(() => import('./myReports'), { ssr: false });
// const OverallNews = dynamic(() => import('./overallNews'), { ssr: false });
// const ViewReport = dynamic(() => import('@/components/viewReport'), { ssr: false });
const DashboardHome = dynamic(() => import('@/components/dashboard/dashboardHome'), { ssr: false });
const DashboardExplore = dynamic(() => import('@/components/dashboard/dashboardExplore'), { ssr: false });

const DashboardPage = () => {
  const supabase = createClient()
  const [isDashboardHome, setIsDashboardHome] = useState(true);

  return (
    <>
      {isDashboardHome ? <DashboardHome /> : <DashboardExplore/>}
    </>
  );
};

export default DashboardPage;
