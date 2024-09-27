"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarProps {
  setOpen: (open: boolean) => void;
}

import Images from '@/assets/images';

const Sidebar: React.FC<SidebarProps> = ({setOpen }) => {
    const tooltips = [
        { href: "/dashboard", src: Images.home, alt: "Home icon", text: "Dashboard" },
        { href: "/top-stories", src: Images.explore, alt: "Loudspeaker icon", text: "Top stories" },
        { onClick: () => setOpen(true), src: Images.search, alt: "Add Button icon", text: "Add report", isButton: true },
        { href: "/watchlist", src: Images.bookmark, alt: "Bookmark icon", text: "Watchlist" },
    ];

    return (
        <TooltipProvider>
        <div className="flex flex-row h-screen">
            <div className="flex h-screen">
            <aside className="z-20 flex flex-col items-center w-[85px] bg-sidebar px-4 py-6">
                <div className="mb-auto">
                    <Link href="/dashboard">
                        <Image
                        src={Images.sxLogo}
                        height={31}
                        width={31}
                        alt="logo"
                        />
                    </Link>
                </div>
                <div className="flex flex-col space-y-10">
                    {tooltips.map((tooltip, index) => (
                        <Tooltip key={index}>
                        <TooltipTrigger asChild>
                            {tooltip.isButton ? (
                                <button onClick={tooltip.onClick} className="opacity-70 hover:opacity-100 transition-opacity duration-500">
                                    <Image
                                    src={tooltip.src}
                                    height={24}
                                    width={24}
                                    alt={tooltip.alt}
                                    />
                                </button>
                            ) : (
                                tooltip.href && (
                                    <Link href={tooltip.href} className="opacity-70 hover:opacity-100 transition-opacity duration-500">
                                        <Image
                                        src={tooltip.src}
                                        height={24}
                                        width={24}
                                        alt={tooltip.alt}
                                        />
                                    </Link>
                                )
                            )}
                        </TooltipTrigger>
                        <TooltipContent side="top" sideOffset={36}>
                            <p>{tooltip.text}</p>
                        </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
                <div className="mt-auto flex flex-col space-y-5 items-center justify-center">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button onClick={() => {}} className="opacity-70 hover:opacity-100 transition-opacity duration-500">
                                <Image
                                src={Images.settings}
                                height={24}
                                width={24}
                                alt="settings"
                                />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" sideOffset={36}>
                            <p>Settings</p>
                        </TooltipContent>
                    </Tooltip>
                    <button onClick={() => {}} className="opacity-70 hover:opacity-100 transition-opacity duration-500">
                        <Link href="/profile">
                            <Image
                            className="rounded-full"
                            src={Images.profilePicture1}
                            height={35}
                            width={35}
                            alt="profile"
                            />
                        </Link>
                    </button>
                </div>
            </aside>
            <div className="w-[1px] bg-gradient-to-b from-sidebar-start via-sidebar-via to-sidebar-end h-full"></div>
            </div>
        </div>
        </TooltipProvider>
    );
};

export default Sidebar;