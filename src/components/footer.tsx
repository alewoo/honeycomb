"use client";

import { messina_light } from "../app/fonts";
import { useRef } from "react";
import { useTheme } from '../context/ThemeContext';
import Image from "next/image";
import Images from "../assets/images";
import Link from "next/link";

const socialLinks = [
    {
        href: "https://discord.gg/6nXvx6fG6V",
        src: Images.discord,
        blackSrc: Images.discordBlack,
        alt: "Discord Logo"
    },
    {
        href: "https://www.linkedin.com/company/thestartupexchange",
        src: Images.linkedin,
        blackSrc: Images.linkedinBlack,
        alt: "Linkedin Logo"
    },
    {
        href: "https://x.com/startupxchange",
        src: Images.twitter,
        blackSrc: Images.twitterBlack,
        alt: "Twitter Logo"
    },
    {
        href: "https://www.instagram.com/startupexchange",
        src: Images.instagram,
        blackSrc: Images.instagramBlack,
        alt: "Instagram Logo"
    },
]

export default function Footer() {
    const navRef = useRef<HTMLDivElement>(null);
    const { theme, styles } = useTheme();

    const showNavBar = () => {
        navRef.current ? navRef.current.classList.toggle("responsive_nav") : null;
      };
    return (
      <>
        <footer className={`flex w-full flex-col border-dashed space-x-4 ${theme === 'dark' ? 'text-[#A1A1A1] bg-black border-[#414141]' : 'text-black bg-white border-[#E0E0E0]'}`}>
            <div className={`${styles.borderColor} md:mx-11 px-5 mx-5 md:py-[52px] py-6 border-x z-10`}>
                <div className="flex w-full justify-start">
                    <Image src={theme === 'dark' ? Images.sxFooterText : Images.sxFooterTextWhite} alt="Startup Exchange Logo" layout="responsive" width={100} height={100} />
                </div>
                <div className="flex flex-row justify-between align-end items-end md:pt-12 pt-8">
                    <div className={`${messina_light.className} flex flex-col text-[12px] md:text-[13px] gap-y-2 tracking-tight items-start`}>
                        <div>
                        © 2024 STARTUP EXCHANGE. 
                        </div>
                        <div>
                            ALL RIGHTS RESERVED
                        </div>
                    </div> 
                    <div className="flex space-x-1.5 md:space-x-3.5 flex-row items-center">
                        {socialLinks.map((link, index) => (
                            <Link href={link.href} key={index} className="opacity-40 hover:opacity-100 transition duration-500">
                                <Image
                                    src={theme === 'dark' ? link.src : link.blackSrc}
                                    alt={link.alt}
                                    width={17}
                                    height={17}
                                    className="w-[70%] h-auto md:w-[80%]"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
        {/* <footer className={`flex w-full justify-center mx-auto flex-row border-dashed border-t py-6 px-2 md:px-16 space-x-4 ${theme === 'dark' ? 'text-[#A1A1A1] bg-black border-[#414141]' : 'text-black bg-white border-[#E0E0E0]'}`}>
            <div className={`${messina_light.className} text-[12px] md:text-[13px] flex flex-row gap-x-4 tracking-tight items-center`}>
                © 2024 STARTUP EXCHANGE. ALL RIGHTS RESERVED
            </div> 
            <div className="flex space-x-1.5 md:space-x-3.5 flex-row items-center">
                {socialLinks.map((link, index) => (
                    <Link href={link.href} key={index} className="opacity-40 hover:opacity-100 transition duration-500">
                        <Image
                            src={theme === 'dark' ? link.src : link.blackSrc}
                            alt={link.alt}
                            width={17}
                            height={17}
                            className="w-[70%] h-auto md:w-[80%]"
                        />
                    </Link>
                ))}
            </div>           

        </footer> */}
      </>
    );
}