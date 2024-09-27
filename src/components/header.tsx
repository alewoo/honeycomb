import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import SiteMenu from "./siteMenu";
import { useTheme } from '../context/ThemeContext';
import Images from '../assets/images';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
    messina_light,
    messina_semibold,
    messina_book
} from '../app/fonts';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'l' || event.key === 'L') {
                window.location.href = '/login';
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <>
            <header className={`flex w-full justify-between items-center flex-row border-b pb-3.5 py-5 md:px-12 px-4 sticky top-0 z-50 ${theme === 'dark' ? 'bg-black text-white border-[#242424]' : 'bg-white text-black border-[#E0E0E0]'}`}>
                <div>
                    <Link href="/">
                        <Image
                            src={theme === 'dark' ? Images.sxFull : Images.sxFullBlack}
                            alt="SX Full Logo"
                            width={136}
                            height={27}
                            className="w-[55%] md:w-[80%] h-auto"
                        />
                    </Link>
                </div>
                {isMobile ? (
                    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                        <SheetTrigger asChild>
                            <div className="cursor-pointer">
                                {menuOpen ? <IoMdClose size={30} /> : <RxHamburgerMenu size={24} />}
                            </div>
                        </SheetTrigger>
                        <SheetContent side="top" className="bg-[#111111] w-full p-12 space-y-4">
                            <SiteMenu useBold={true} vertical={true} textAlign="text-left" />
                            {/* <Button href="https://airtable.com/apppnBcY3p3kbfT9V/pagCGeASraULRMoSw/form" variant="dark" className="rounded-xl py-2 px-5 mt-4">
                                <div className={`${messina_semibold.className} text-[12px] md:text-normal tracking-tight`}>
                                    JOIN THE COMMUNITY
                                </div>
                            </Button> */}
                            <div className="flex flex-col space-y-4 pt-4">
                                <Button href="/login " className="bg-transparent border border-zinc-700 hover:bg-zinc-900 rounded-full items-center justify-center flex flex-row opacity-100 hover:opacity-70 transition duration-200 hover:cursor-pointer">
                                    <Image src={Images.rocket} alt="fire" width={14} height={14} className="mr-2"/>
                                    <p className={`${messina_book.className} tracking-tighter text-sm text-white`}>
                                        LOG IN
                                    </p>
                                </Button>
                                <div className="relative inline-block w-full">
                                    <Button 
                                        href="https://airtable.com/apppnBcY3p3kbfT9V/pagCGeASraULRMoSw/form"
                                    className="opacity-70 w-full px-14 hover:opacity-100 rounded-full bg-transparent border border-transparent relative transition-all duration-200 h-10"
                                    style={{
                                    background: 'linear-gradient(#17171a,#17171a) padding-box, linear-gradient(180deg,hsla(0,0%,100%,.5),hsla(0,0%,100%,.25)) border-box'
                                        }}

                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <Image src={Images.fire} alt="fire" width={14} height={14} className="mr-2"/>
                                        <p className={`${messina_book.className} tracking-tighter text-sm text-white`}>
                                            SIGN UP
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <>
                        <SiteMenu useBold={false} />
                        <div className="flex flex-row space-x-6">
                            <a href="/login " className="items-center justify-center flex flex-row opacity-100 hover:opacity-70 transition duration-200 hover:cursor-pointer">
                                <Image src={Images.rocket} alt="fire" width={14} height={14} className="mr-2"/>
                                <p className={`${messina_book.className} tracking-tighter text-sm text-white`}>
                                    LOG IN
                                </p>
                                {/* <p className={`${messina_book.className} ml-3 tracking-tighter bg-zinc-800 rounded-sm text-xs px-2 py-1 text-gray-400`}>
                                    L
                                </p> */}
                            </a>
                            <div className="relative inline-block">
                                <Button 
                                    href="https://airtable.com/apppnBcY3p3kbfT9V/pagCGeASraULRMoSw/form"
                                    className="opacity-70 px-14 hover:opacity-100 rounded-full bg-transparent border border-transparent relative transition-all duration-200 w-24 h-10"
                                    style={{
                                    background: 'linear-gradient(#17171a,#17171a) padding-box, linear-gradient(180deg,hsla(0,0%,100%,.5),hsla(0,0%,100%,.25)) border-box'
                                    }}
                                >
                                </Button>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <Image src={Images.fire} alt="fire" width={14} height={14} className="mr-2"/>
                                    <p className={`${messina_book.className} tracking-tighter text-sm text-white`}>
                                        SIGN UP
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </header>
        </>
    );
};

export default Header;