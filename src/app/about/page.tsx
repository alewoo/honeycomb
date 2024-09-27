"use client";

import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";
import Images from "../../assets/images";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DashedDivider from "@/components/dashedDivider";
import { useTheme } from '../../context/ThemeContext';
import { partners } from '../../data/partnerData';
import { team } from '../../data/teamData';
import {
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_bold,
    plus_jakarta_sans_regular,
    plus_jakarta_sans_medium,
    plus_jakarta_sans_thin,
    crimson_regular_italic,
    messina_book,
    messina_light,
    messina_semibold
} from '../../app/fonts';


const AboutPage = () => {
    const { theme, styles } = useTheme();
    const numRows = Math.ceil(team.length / 2);
    const numPartnerRows = Math.ceil(partners.length / 5);
  
    return (
        <>
            <Header />
            <div className={`flex flex-col w-full items-center justify-center ${styles.textColor} ${styles.backgroundColor} ${plus_jakarta_sans_regular.className}`}>
                <div className={`flex flex-col w-[94%] py-32 px-12 ${theme === 'dark' ? 'border-[#242424] bg-dot-white/[0.2]' : 'border-[#E0E0E0] bg-white bg-dot-black/[0.2] '} border-x items-start justify-center gap-y-4`}>
                    <div className={`absolute pointer-events-none inset-0 flex items-center justify-center ${theme === 'dark' ? 'bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]' : 'bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,white)]'}`}></div>
                    <h1 className={`w-full text-start text-[21px] pb-16 leading-[125%] ${messina_book.className}`}>ABOUT US</h1>
                    <div className={`flex flex-col md:flex-row w-full md:space-x-16 space-y-8 md:space-y-0 md:items-center ${plus_jakarta_sans_regular.className}`}>
                        <p className="md:text-[48px] text-[32px] md:w-[50%] leading-[125%] ">
                            Who we are
                        </p>
                        <p className={`text-[18px] md:w-[50%] align-end justify-end leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                        We are a nonprofit community that empowers university students to become successful startup founders through accountability, mentorship, personal development, and rapid iteration of their ideas.
                        </p>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] z-10 space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="items-start px-12 py-12">
                        <p className={`${messina_light.className}`}>Empowering do-ers to reach their full potential.</p>
                    </div>
                    <div className="items-end md:px-72 px-12 pb-20 space-y-12">
                        <p className="md:text-[36px] text-[32px] leading-[125%]">
                            Startup Exchange is on a mission to create a <span className={`${crimson_regular_italic.className} tracking-tight text-[42px]`}>{' '}universally accessible space{' '}</span>  for college students to become startup founders.
                        </p>
                        <div className="flex flex-row w-full justify-end">
                            <p className={`text-[18px] md:w-[60%] leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                We envision a reality where students can learn how to build and grow a startup idea, regardless of what college they attend.
                            </p>
                        </div>
                    </div>
                    <div className="items-end md:px-36 px-12 pb-28 space-y-12">
                        <p className={`md:text-[36px] text-[32px] leading-[125%]`}>
                            College is inherently a
                            <span className={`${crimson_regular_italic.className} tracking-tight text-[42px]`}>{' '}linear{' '}</span> 
                            path. It&apos;s scary to break the path of picking a major and applying to internships like your friends.
                        </p>
                        <div className="flex flex-col md:px-12 md:w-[60%] justify-center space-y-12">
                            <p className={`text-[18px] leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                Here&apos;s the thing. You shouldn&apos;t need to worry about that at this stage. The biggest ideas and companies started simply as side-projects or inner-child curiosities.
                            </p>
                        </div>
                        <div className="flex flex-row w-full justify-end">
                            <p className={`text-[18px] md:w-[55%] leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                                Before you have any conviction that an idea should become a startup, it&apos;s important to tinker with an idea, to put it in front of users, and to get feedback. SX is the place for you to do that, and to learn how to do it well.
                            </p>
                        </div>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="px-12 w-full flex justify-end py-12">
                        <p className={`${messina_light.className} w-full justify-end text-end items-end`}>How we started</p>
                    </div>
                    <div className={`flex flex-col space-y-8 justify-center gap-y-4`}>
                        <p className={`md:text-[36px] text-[32px] text-cent leading-[125%] md:px-40 px-12 ${plus_jakarta_sans_medium.className}`}>
                            We’re looking to <span className={`${crimson_regular_italic.className} tracking-tight text-[42px]`}>{' '}redefine{' '}</span> college entrepreneurship. While college is an exciting time to work on your craziest ideas, <span className={`${crimson_regular_italic.className} tracking-tight text-[42px]`}>{' '}many students feel lost{' '}</span>in the process of developing their ideas.
                        </p>
                        <p className="md:px-40 px-12">
                            By growing a culture of making things, we’re here to change that.
                        </p>
                        <div className={`md:px-80 px-12 space-y-8 text-[18px] ${plus_jakarta_sans_thin.className}`}>
                            <p>
                            Startup Exchange arose from the entrepreneurship student club at Georgia Tech, which gathered makers, builders, and creatives in the library every week to discuss their most ambitious startup ideas. Over 10 years, students from this group went on to start companies collectively valued at over $4.5B. 
                            </p>
                            <p>
                                Through the club&apos;s extended-reality hackathon in 2023, many of the hundreds of attendees from across the nation expressed a need for a new space that prioritizes rapid iteration and attracts people genuinely passionate about pursuing their ideas.
                            </p>
                            <p>
                                Inspired by this feedback and similar sentiments from dozens of students across the US, our team founded Startup Exchange in Fall 2023 with the mission to cultivate entrepreneurial communities at campuses in need and support established ones. Since then, over 7,000 students from more than 40 universities nationwide have attended a Startup Exchange event.
                            </p>
                        </div>
                    </div>
                    <div className={`items-end md:px-56 px-12 pb-28 space-y-8 text-[18px] ${plus_jakarta_sans_thin.className}`}>
                        <p className={`md:text-[36px] text-[32px] text-left leading-[125%] py-12 ${plus_jakarta_sans_medium.className}`}>
                            We centralize a network of domain experts, startups, mentors, and investors that enable students to go from -1 to 1.
                        </p>
                        <div className="md:px-24 space-y-8">
                            <p>
                                By bringing together organizers from universities across the country, our team understands the unique challenges that every campus faces when building a community of like-minded entrepreneurs.
                            </p>
                            <p>
                                We work closely with student organizations and institutions to create inclusive, close-knit communities where students can form meaningful relationships and gain the support and accountability that they need to pursue their maker journeys.
                            </p>
                            <p>
                                In addition to our work with universities, we actively collaborate with leading investors, startups, and corporations to bring new and exciting opportunities to the builders in our community. These partnerships range from community events and sponsorship to marketing and recruitment opportunities, further enhancing the resources and networks available to the SX community.
                            </p>
                        </div>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-start gap-y-4`}>
                    <div className="px-12 w-full flex justify-end py-12">
                        <p className={`${messina_light.className} w-full justify-end text-start items-end`}>Our team</p>
                    </div>
                    <div className={`flex flex-col px-12 justify-start space-y-16`}>
                        {Array.from({ length: numRows }, (_, rowIndex) => (
                            <div key={rowIndex} className={`flex flex-col sm:flex-row md:px-20 md:gap-x-28 gap-y-12 md:gap-y-0`}>
                                {team.slice(rowIndex * 4, (rowIndex + 1) * 4).map((teamMember, index) => (
                                    <div key={index} className={`flex flex-col align-start w-full sm:w-1/2 space-y-6 text-start`}>
                                        <div className="relative w-full h-auto">
                                            <Image src={teamMember.image} alt={teamMember.name} width={225} height={225} objectFit="cover" className="w-full"/>
                                        </div>
                                        <div className="space-y-4">
                                            <p className={`text-[21px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>
                                                {teamMember.name}
                                            </p>
                                            <p className={`text-[14px] ${messina_book.className}`}>
                                                {teamMember.role.toUpperCase()}
                                            </p>
                                            <div className="flex flex-row space-x-4">
                                                {teamMember.twitter && (
                                                    <Link href={teamMember.twitter}>
                                                        <Image src={theme === 'dark' ? Images.twitter : Images.twitterBlack} alt="Twitter" width={18} height={18} className="opacity-60 hover:opacity-100 transition duration-500"/>
                                                    </Link>
                                                )}
                                                {teamMember.linkedin && (
                                                    <Link href={teamMember.linkedin}>
                                                        <Image src={theme === 'dark' ? Images.linkedin : Images.linkedinBlack} alt="LinkedIn" width={18} height={18} className="opacity-60 hover:opacity-100 transition duration-500"/>
                                                    </Link>
                                                )}
                                                {teamMember.personal && (
                                                    <Link href={teamMember.personal}>
                                                        <Image src={theme === 'dark' ? Images.paperclip : Images.paperclipBlack} alt="Additional Link" width={18} height={18} className="opacity-60 hover:opacity-100 transition duration-500"/>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="md:px-32 px-12 pb-28 w-full flex flex-col md:flex-row justify-between md:space-x-12 md:items-center space-y-12 md:space-y-0">
                            <p className={`${plus_jakarta_sans_extrabold.className} text-[32px] w-full`}>Join us and shape the future of college entrepreneurship.</p>
                            <Button href="https://www.notion.so/startup-exchange/Startup-Exchange-Team-Breakdown-411ccdc0abaf46cfaa09c7eb6c2fb613?pvs=4" variant="secondary" className={`w-full md:w-auto px-4 ${messina_semibold.className}`}>VIEW OPEN POSITIONS</Button>
                        </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-start gap-y-4`}>
                    <div className="px-12 w-full flex flex-col space-y-12 justify-end py-12">
                        <p className={`${messina_light.className} w-full justify-end text-end items-end`}>Previous partners</p>
                        <p className={`${plus_jakarta_sans_extrabold.className} w-full justify-end text-start text-[36px] items-end`}>Trusted by leading investors, startups, corporations, and institutions.</p>
                        <p className={`${plus_jakarta_sans_thin.className} w-[60%] text-[18px]`}>We actively collaborate with new partners to bring new and exciting opportunities to the builders in our community. Partnerships range from community events and sponsorship to marketing and recruitment opportunities.</p>
                    </div>
                    <div className={`flex flex-col ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'} border-[#242424] border-dashed border-t items-start justify-start`}>
                        {Array.from({ length: numPartnerRows }, (_, rowIndex) => (
                        <div key={rowIndex} className={`flex flex-wrap w-full border-b border-dashed ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'}`}>
                            {partners.slice(rowIndex * 5, (rowIndex + 1) * 5).map((partner, index) => (
                            <div key={index} className={`flex w-full sm:w-1/2 md:w-1/5 border-r border-b md:border-b-0 border-dashed ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'} py-10 px-12 items-center justify-center`}>
                                <Link href={partner.href} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={Images[partner.name]}
                                    alt={partner.name}
                                    height={42}
                                    className="opacity-80 hover:opacity-100 transition duration-500"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                                </Link>
                            </div>
                            ))}
                        </div>
                        ))}
                    </div>
                    <div className="px-12 pb-20 pt-4 w-full flex md:flex-row flex-col justify-between md:space-x-12 md:align-center md:items-center">
                        <p className={`${plus_jakarta_sans_extrabold.className} text-[32px] w-full pb-12 md:pb-0`}>Interested in partnering with us?</p>
                        <Button href="mailto:hello@startup.exchange" variant="secondary" className={`px-10 w-full md:w-auto ${messina_semibold.className}`}>CONTACT US</Button>
                    </div>
                </div>
            </div>
            <DashedDivider/>
            <Footer />
        </>
  );
};

export default AboutPage;


/// at sx, our team is solving a couple of problems.
// 1. we're debunking what it takes to get an idea off the ground
// we're giving students an opportunity to connect with students at different campuses
// we're helping students to navigate balancing school and their startup  