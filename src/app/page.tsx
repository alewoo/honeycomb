"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { Badge, badgeVariants } from "@/components/ui/badge"
import Link from "next/link";
import {
  plus_jakarta_sans_regular,
  plus_jakarta_sans_medium,
  plus_jakarta_sans_semibold,
  plus_jakarta_sans_bold,
  plus_jakarta_sans_extrabold,
  messina_book
} from './fonts';
import DashedDivider from "../components/dashedDivider";
import BuildersInSX from "../components/home/BuildersInSX";
import BottomMenu from "../components/home/BottomMenu";
import CTA from "../components/home/CTA";
import FAQs from "../components/home/FAQs";
import AlumniPrograms from "../components/home/AlumniPrograms";
import ParticipatingCampuses from "../components/home/ParticipatingCampuses";
import Hero from "../components/home/Hero";
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <main className={`flex h-screen min-w-screen flex-col items-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <Hero/>
        <DashedDivider/>
        <BuildersInSX/>
        <DashedDivider/>
        <ParticipatingCampuses/>
        <DashedDivider/>
        <AlumniPrograms/>
        <DashedDivider/>
        <FAQs/>
        <DashedDivider/>
        <CTA/>
        {/* <DashedDivider/> */}
        <BottomMenu/>
        <DashedDivider/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;
