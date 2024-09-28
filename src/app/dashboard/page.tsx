"use client";

import React, { useState, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
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


const DashboardHome = dynamic(() => import('@/components/dashboard/dashboardHome'), { ssr: false });

const DashboardPage = () => {
  const [isDashboardHome, setIsDashboardHome] = useState(true);

  return (
    <>
      <DashboardHome/>
    </>
  );
};

export default DashboardPage;
