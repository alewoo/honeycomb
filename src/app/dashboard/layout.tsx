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
    </>
  );
}
