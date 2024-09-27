"use client";
// import { posthog } from 'posthog-js';
import { useEffect } from 'react';
import Link from 'next/link';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Marquee from "react-fast-marquee";
import DashedDivider from "@/components/dashedDivider";
import EmailCapture from '@/components/emailCapture';
import Image from 'next/image';
import Images from '../../assets/images';
import { useTheme } from '../../context/ThemeContext';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { EventList } from "@/components/events/eventsList";

import {
    plus_jakarta_sans_regular,
    plus_jakarta_sans_medium,
    plus_jakarta_sans_semibold,
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_thin,
    messina_book,
    messina_light,
    crimson_regular_italic,
    messina_semibold,
    messina_bold,
    crimson_regular,
} from '../fonts';


const Events = () => {

    const speakers = [
        {
            name: "Michael Seibel",
            company: "Managing Director, Y Combinator",
            pic: Images.michaelGuest
        },
        {
            name: "Cory Levy",
            company: "Founder, ZFellows",
            pic: Images.coryGuest
        },
        {
            name: "Dylan Cooper",
            company: "SVP, PrizePicks",
            pic: Images.dylanGuest
        },
        {
            name: "Brooks Buffington",
            company: "Founder, YikYak",
            pic: Images.brooksGuest
        },
        {
            name: "Sean Henry",
            company: "Founder & CEO, Stord",
            pic: Images.seanGuest
        },
        {
            name: "Charu Thomas",
            company: "Founder & CEO, Ox",
            pic: Images.charuGuest
        },
        {
            name: "Chris Klaus",
            company: "Founder & CTO, ISS (acqr. by IBM)",
            pic: Images.chrisGuest
        },
        {
            name: "Safwaan Khan",
            company: "Head of Capital, Founders Inc.",
            pic: Images.safwaanGuest
        },
        {
            name: "Kabir Barday",
            company: "Founder & CEO, OneTrust",
            pic: Images.kabirGuest
        },
        {
            name: "Dan Porter",
            company: "Founder & CEO, Overtime",
            pic: Images.danGuest
        },
        {
            name: "AJ Piplica",
            company: "Founder & CEO, Hermeus",
            pic: Images.ajGuest
        },
        {
            name: "Jhillika Kumar",
            company: "Founder & CEO, Mentra",
            pic: Images.jhillikaGuest
        },
        {
            name: "Kathryn Hays",
            company: "Founder, Kabbage (acqr. by AmEx)",
            pic: Images.kathrynGuest
        }
    ];
    const events =[
        {
            name: "AI ATL",
            description: "Georgia Tech & Atlanta's official AI hackathon. 400+ participants from 43 universities in 2023.",
            logo: Images.aiAtlLogo,
            image: Images.aiatl,
            link: "https://www.aiatl.io",
            sponsors: "Google, Anthropic, Hugging Face, Drive, BCGX, Founders Inc., ZFellows, Contrary, + more",
            attendees: "400+ from 43 universities"
        },
        {
            name: "PitchRx",
            description: "The largest collegiate healthcare pitch competition in digital health, AI and medical diagnostics. 250+ participants from 17 universitiesin 2024.",
            logo: Images.pitchRxLogo,
            image: Images.pitchRx,
            link: "https://www.pitchrx.io",
            sponsors: "Mayo Clinic, Tempus, 1517 Fund, Contrary, Drive Capital, Biolocity, + more",
            attendees: "250+ from 17 universities"
        },
        {
            name: "ImmerseGT",
            description: "Georgia Tech's official XR hackathon. Largest in the world in 2023, with 400+ hackers from 53 universities globally.",
            logo: Images.immerseGTLogo,
            image: Images.immerseGT,
            link: "https://www.immersegt.io",
            sponsors: "Meta, Google, Nvidia, Unity, Accenture",
            attendees: "400+ from 53 universities globally"
        },
        {
            name: "ImpactHack",
            description: "A policy and tech hackathon aligned with the UN Sustainable Development Goals. 200+ participants in 2023.",
            logo: Images.impactHackLogo,
            image: Images.impactHack,
            link: "https://www.impacthackatl.com",
            sponsors: "Georgia Tech School of Public Policy, Teach for America, Cherry Street Energy, Sustainable-X",
            attendees: "200+ from 12 universities"
        },
        {
            name: "Hacklytics",
            description: "36-hour data-science focused hackathon. 1200+ participants, $20,000 in prizes.",
            logo: Images.hacklyticsLogo,
            image: Images.hacklytics,
            link: "https://www.hacklytics.io",
            sponsors: "Intel, National Security Agency, Microsoft, AWS, The D. E. Shaw Group, + more",
            attendees: "1200+ participants, 165 submitted projects"
        },
        {
            name: "Web3ATL",
            description: "Atlanta's premiere Web3 hackathon. Over $10,000 in prizes.",
            logo: Images.webThreeATLLogo,
            image: Images.webThreeATL,
            link: "https://hack.web3atl.io/",
            sponsors: "Chainlink, Arbitrum, Revest Finance",
            attendees: "250+ from 17 universities"
        }
    ];

    const sponsors = ["google", "nvidia", "anthropic", "huggingFace", "chainlink", "zfellows", "mayoClinic", "contrary", "fifteenSeventeen", "finc", "bcgX", "drive", "accenture"];
    const { theme, styles } = useTheme();
    // useEffect(() => {
    //     Redirect();
    // }, []);

    // return null;
    return (
        <>
            <Header />
            <div className={`flex flex-col w-full items-center justify-center ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}>
                <div className={`flex flex-col w-[94%] py-32 px-12 ${theme === 'dark' ? 'border-[#242424] bg-dot-white/[0.2]' : 'border-[#E0E0E0] bg-white bg-dot-black/[0.2] '} border-x items-start justify-center gap-y-4`}>
                    <div className={`absolute pointer-events-none inset-0 flex items-center justify-center ${theme === 'dark' ? 'bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]' : 'bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,white)]'}`}></div>
                    <h1 className={`w-full text-start text-[21px] pb-16 leading-[125%] ${messina_book.className}`}>EVENTS</h1>
                    <div className={`flex flex-col md:flex-row w-full md:space-x-16 space-y-8 md:space-y-0 md:items-center ${plus_jakarta_sans_regular.className}`}>
                        <p className="md:text-[48px] text-[32px] md:w-[50%] leading-[125%] ">
                        Find upcoming SX events

                        </p>
                        <p className={`text-[18px] md:w-[50%] align-end justify-end leading-[140%] ${plus_jakarta_sans_thin.className}`}>
                        We continuously bring cutting-edge and exciting opportunities to college builders. This includes hackathons, demo days, and pitch competitions.
                        </p>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] z-10 space-y-8 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="items-start px-12 pt-12">
                        <p className={`text-end ${messina_light.className}`}>Upcoming events</p>
                    </div>
                    <EventList />
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] z-10 space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="items-start px-12 pt-12 pb-2">
                        <p className={`text-start ${messina_light.className}`}>Previous sponsors</p>
                    </div>
                    <div className={`flex flex-col w-full border-b ${styles.borderColor}`}>
                        <Marquee className="gap-x-9" speed={75} loop={0}>
                            <div className={`flex flex-row gap-10`}>
                                {sponsors.map((sponsor, index) => (
                                    <div key={index} className={`relative items-center align-center`} style={{ height: '75px' }}>
                                        <Image
                                            src={Images[sponsor]}
                                            alt={sponsor}
                                            height={42}
                                            className="opacity-80 hover:opacity-100 transition duration-500"
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Marquee>
                    </div>
                    <div className="items-start px-12 py-2">
                        <p className={`text-end ${messina_light.className}`}>Previous speakers</p>
                    </div>
                    <div className="flex flex-col w-full relative">
                        <Carousel>
                            <CarouselContent>
                                {speakers.map((speaker, index) => (
                                    <CarouselItem key={index} className={`flex flex-col min-w-[200px] max-w-[200px]`}>
                                        <div className={`relative border ${styles.borderColor} border-dashed`} style={{ height: '238px' }}>
                                            <Image src={speaker.pic} layout="fill" objectFit="cover" className={``} alt="sx" />
                                        </div>
                                        <div className={`border border-dashed p-5 space-y-4 ${styles.borderColor}`}>
                                            <p className={`text-[15px] leading-[150%] ${styles.textColor} ${plus_jakarta_sans_semibold.className}`} >{speaker.name}</p>
                                            <p className={`text-[15px] leading-[150%] ${styles.textColor} ${plus_jakarta_sans_thin.className}`} style={{ minHeight: '45px' }}>{speaker.company}</p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] z-10 py-12 space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="items-start px-12 pb-2">
                        <p className={`text-start ${messina_light.className}`}>ship-it 🚢</p>
                    </div>
                    <div className="px-12">
                        <div className={`flex flex-col items-start w-full md:px-72 space-y-12`}>
                            <div className="relative space-y-8 w-full">
                                <Image src={Images.shipIt} alt="shipit" width={750} height={750} />
                                <p className={`text-[32px] text-start ${plus_jakarta_sans_medium.className}`}>
                                    Ship-It: a space to forget about class & hw and <span className={`${crimson_regular_italic.className}`}>&quot;ship&quot; your next idea.</span> 
                                </p>
                            </div>
                            <div className="justify-center space-y-8 align-center items-center">
                                <p className={`text-[18px] ${plus_jakarta_sans_thin.className}`}>
                                    &quot;Ship-it&quot; is SX&apos;s weekly co-working session that brings together student makers, builders, and creators to work on their ideas.<br /><br />
                                    Ship-it is the place to start, to be inspired, and regain your childlike imagination and drive for making things & sharing them with friends.
                                </p>
                            </div>
                            <div>
                                <Button href="http://shipit.lol" variant="outline" className={`py-3 z-10 px-5 hover:text-black transition duration-500 ${theme === 'dark' ? 'bg-black text-white border border-[#232323]' : 'bg-white text-black border border-[#e0e0e0]'}`}>
                                    <div className={`${messina_book.className} font-bold`}>
                                    LEARN MORE {'>'}
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <DashedDivider />
                <div className={`flex flex-col w-[94%] z-10 space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="items-start px-12 py-12">
                        <p className={`text-end ${messina_light.className}`}>Hackathons and pitch competitions</p>
                    </div>
                    <div className="px-12 pb-20 space-y-20">
                        {events.map((event, index) => (
                        <Link key={index} href={event.link} target="_blank" rel="noopener noreferrer" className={`flex md:flex-row flex-col w-full md:space-x-20 md:space-y-0 space-y-12 md:items-center ${plus_jakarta_sans_regular.className}`}>
                            <div className="relative md:w-[50%] w-full">
                                <Image src={event.image} alt="hi" width={550} height={300} objectFit="cover" layout="responsive"/>
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 flex items-center justify-center transition-opacity duration-300">
                                    <Image src={event.logo} alt="Logo" width={250} height={250} />
                                </div>
                            </div>
                            <div className="justify-center md:w-[50%] space-y-8 align-center items-center">
                                <div>
                                    <p className={`text-[32px] ${plus_jakarta_sans_medium.className}`}>
                                       {event.name}
                                    </p>
                                    <p className={`text-[18px] ${messina_book.className}`}>
                                   {event.description}
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <p className={`text-[14px] ${messina_book.className}`}>
                                        Sponsors & partners
                                    </p>
                                    <p className={`text-[14px] ${messina_bold.className}`}>
                                       {event.sponsors}
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    {/* <p className={`text-[14px] ${messina_book.className}`}>
                                        Attendees
                                    </p>
                                    <p className={`text-[14px] ${messina_bold.className}`}>
                                       {event.attendees}
                                    </p> */}
                                    <Button href={event.link} variant="outline" className={`py-3 z-10 px-5 hover:text-black transition duration-500 ${theme === 'dark' ? 'bg-black text-white border border-[#232323]' : 'bg-white text-black border border-[#e0e0e0]'}`}>
                                        <div className={`${messina_book.className} font-bold`}>
                                        LEARN MORE {'>'}
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </Link>
                        ))}
                    </div>
                    <div className={`flex md:flex-row flex-col z-10 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-t space-x-8`}>
                        <div className={`px-12 py-20 w-full flex md:flex-row flex-col justify-between md:space-x-12 md:align-center md:items-center md:align-center`}>
                            <p className={`${plus_jakarta_sans_extrabold.className} text-[32px] w-full pb-12 md:pb-0`}>Stay up-to-date on upcoming events.</p>
                            <EmailCapture/>
                        </div>
                    </div>
                </div>
                <DashedDivider />
                {/* <div className={`flex flex-col w-[94%] z-10 space-y-12 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
                    <div className="items-start py-12 px-12 pb-2">
                        <p className={`text-start ${messina_light.className}`}>SX Summit ATL</p>
                    </div>
                    <div className="px-12">
                        <div className={`flex flex-col items-start w-full md:px-72 space-y-12`}>
                            <div className="relative space-y-8 w-full">
                                <Image src={Images.shipIt} alt="shipit" width={750} height={750} />
                                <p className={`text-[32px] text-start ${plus_jakarta_sans_medium.className}`}>
                                    Ship-It: a space to forget about class & hw and <span className={`${crimson_regular_italic.className}`}>&quot;ship&quot; your next idea.</span> 
                                </p>
                            </div>
                            <div className="justify-center space-y-8 align-center items-center">
                                <p className={`text-[18px] ${plus_jakarta_sans_thin.className}`}>
                                    &quot;Ship-it&quot; is SX's weekly co-working session that brings together student makers, builders, and creators to work on their ideas.<br /><br />
                                    Ship-it is the place to start, to be inspired, and regain your childlike imagination and drive for making things & sharing them with friends.
                                </p>
                            </div>
                            <div>
                                <Button href="http://shipit.lol" variant="outline" className={`py-3 z-10 px-5 hover:text-black transition duration-500 ${theme === 'dark' ? 'bg-black text-white border border-[#232323]' : 'bg-white text-black border border-[#e0e0e0]'}`}>
                                    <div className={`${messina_book.className} font-bold`}>
                                    LEARN MORE {'>'}
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={`flex md:flex-row flex-col z-10 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-t space-x-8`}>
                        <div className={`px-12 py-20 w-full flex md:flex-row flex-col justify-between md:space-x-12 md:align-center md:items-center`}>
                            <p className={`${plus_jakarta_sans_extrabold.className} text-[32px] w-full pb-12 md:pb-0`}>Stay up-to-date on upcoming events.</p>
                            <Button href="https://docs.google.com/forms/d/1K4TKHANO3iWyFM51OqRXBqT1wP2FTYEjE1pdz6559Y0/viewform?edit_requested=true" variant="secondary" className={`px-10 w-full md:w-auto ${messina_semibold.className}`}>COUNT ME IN</Button>
                        </div>
                    </div>
                </div> */}
                <DashedDivider />
            </div>
            <Footer />
        </>
    );
};

const Redirect = async () => {
    // await posthog.init("phc_XbaVMJxYBOdYd6i6Ti3AOvAXQpLSLE1cQtvWi7hodfC", { api_host: "https://app.posthog.com" });

    // await posthog.capture('EarlyUser', {
    //     page: 'early-access',
    //     url: {
    //         current_url: window.location.href
    //     }
    // });

    window.location.href = 'https://lu.ma/sxevents';
}

export default Events;

// SX forges partnerships with industry leaders and organizations to bring opportunities to students everywhere, regardless of where they attend school. 
// Beyond community-partnered opportunities, we also host our own hackathons, pitch competitions, fireside chats, and networking events.



// While the pinnacle of innovation and building lies at the core of Silicon Valley, we imagine a reality where our events spread the culture of building and shipping beyond the Silicon Valley. 
// This is your chance to break into AI, Web3, XR, or any other form of emerging tech.



// Interested in having Startup Exchange as a community partner for your hackathon, pitch competition, or networking event? Contact us here.