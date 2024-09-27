"use client";

import Link from "next/link";
import { useTheme } from '../../context/ThemeContext'; // Adjust the path as necessary
import {
    plus_jakarta_sans_extrabold,
    plus_jakarta_sans_regular
} from '../../app/fonts';
import { Badge, badgeVariants } from "@/components/ui/badge";
import Image from "next/image";
import Images from '../../assets/images';
import { Button } from "@/components/ui/button";
import posthog from 'posthog-js'
import EmailCapture from "../emailCapture";

if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY!, { api_host: 'https://us.i.posthog.com' });
}

const Hero = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`flex flex-col w-[94%] ${theme === 'dark' ? 'bg-black' : 'bg-white'} text-${theme === 'dark' ? 'white' : 'black'}`}>
            <div className={`flex flex-col md:py-56 pt-24 pb-36 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x items-start justify-center gap-y-4 relative`}>
                <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover opacity-60 z-0" style={{ pointerEvents: 'none' }}>
                    <source src="/sxVid.mp4" type="video/mp4" />
                </video>
                <div className="flex flex-col w-full gap-y-4 md:px-12 px-6 z-10 relative">
                    <button onClick={toggleTheme} className={`p-2 m-2 border absolute md:right-3 md:-top-56 right-2 -top-24 rounded-lg ${theme === 'dark' ? 'border-[#949494]' : 'border-[#111111]'}`}>
                        {theme === 'dark' ? (
                            <Image src={Images.darkMode} alt="Light Mode" width={18} height={18} />
                        ) : (
                            <Image src={Images.lightMode} alt="Dark Mode" width={18} height={18} />
                        )}
                    </button>
                    <div className="flex flex-col w-full items-start justify-start space-y-6">
                        <Link href="https://airtable.com/apppnBcY3p3kbfT9V/pagCGeASraULRMoSw/form" className={badgeVariants({ variant: "outlineimg" })}>→ Attend our summer meetups in SF, NYC, and ATL.</Link>
                        <h1 className={`md:w-[85%] w-[100%] md:text-[70px] text-[48px] leading-[110%] tracking-tighter ${plus_jakarta_sans_extrabold.className} ${theme === 'dark' ? 'bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500' : 'text-black'}`}>The path to moving your ideas forward awaits.</h1>
                        <p className={`md:text-[24px] text-[18px] leading-[150%] ${plus_jakarta_sans_regular.className} ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>Startup Exchange is a student-led organization curating the largest community for college builders, makers, and creators. We enable you to build, launch, and grow your ideas. 
                        {/* Sign up to hear about cool builders, campus communities, and upcoming events. */}</p>
                        <EmailCapture/>
                        {/* <Button
                            variant="secondary" 
                            className="px-8" 
                            href="/about"
                            onClick={() => {
                                posthog.capture('our_story_button_clicked', {property: 'value'});
                            }}>
                            Read our story
                        </Button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;