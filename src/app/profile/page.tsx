"use client";

import React, { useState, lazy, Suspense } from 'react';
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import { createClient } from 'utils/supabase/client'
import Image from "next/image";
import Images from '../../assets/images/';
import {
  plus_jakarta_sans_regular,
  plus_jakarta_sans_medium,
  plus_jakarta_sans_semibold,
  plus_jakarta_sans_bold,
  plus_jakarta_sans_extrabold,
  messina_book,
  messina_semibold
} from '../fonts';

const ProfileContent = dynamic(() => import('@/components/profile/profileContent'), { ssr: false });
const ResourcesContent = dynamic(() => import('@/components/profile/resourcesContent'), { ssr: false });
const DemosContent = dynamic(() => import('@/components/profile/demosContent'), { ssr: false });

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const runRows = 5;

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const TabButton = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) => (
    <div className="flex-col items-center justify-center gap-[19px] flex-1 grow flex relative cursor-pointer" onClick={onClick}>
      <div className={`relative self-stretch w-full h-px ${isActive ? 'bg-[#eaaa00] shadow-[0px_0px_5.4px_1px_#aebe4d80]' : ''}`} />
      <div className={`relative w-fit ${isActive ? plus_jakarta_sans_bold.className : plus_jakarta_sans_semibold.className} ${isActive ? 'text-white' : 'text-[#a1a1a1]'} text-lg tracking-[0] leading-[28.1px] whitespace-nowrap`}>
        {label}
      </div>
    </div>
  );

  const recentWins = [
    { text: "finally done with listing API LFGGGGG it took so long", reactions: 5 },
    { text: "completed the user authentication flow", reactions: 3 },
    { text: "fixed that nasty bug in the dashboard", reactions: 7 },
    { text: "deployed the new feature to production", reactions: 4 },
    { text: "optimized database queries, site is much faster now", reactions: 6 },
  ];

  return (
    <>
      <div className="w-full h-full relative bg-[#111111]">
        <div className="w-full h-full flex flex-col">
          <div className="h-16 border-b border-zinc-900">
            <div className="flex flex-row justify-between items-center pl-10 pr-4 py-4 border-b border-zinc-900">
              <div className="flex flex-row items-center gap-2">
                <div className="w-[11px] h-[11px] flex items-center justify-center">
                  <Image src={Images.backArrow} alt="Arrow" className="w-[13px] h-[7px] rotate-90" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="text-white text-sm font-bold font-['Plus Jakarta Sans'] leading-snug">@cartercote</div>
                    <div className="w-[3px] h-[3px] bg-[#6e6d6d] rounded-[33px]" />
                    <div className="text-[#bebebe] text-sm font-medium font-['Plus Jakarta Sans'] leading-snug">82 updates, 32 posts</div>
                    <div className="w-[3px] h-[3px] bg-[#6e6d6d] rounded-[33px]" />
                    <div className="text-[#6e6d6d] text-sm font-medium font-['Plus Jakarta Sans'] leading-snug">Stanford University</div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-4 flex">
                <div className="p-2 bg-[#2d2d2d] rounded-lg flex items-center justify-center">
                  <Image src={Images.alert} alt="Alert Icon" className="w-4 h-4"/>
                </div>
                <Button href="mailto:hello@startup.exchange" variant="secondary" className={`px-6 gap-x-2 w-full md:w-auto ${plus_jakarta_sans_semibold.className}`}>
                  <Image src={Images.plusThickDark} alt="Filter" width={10} height={10} />
                  ADD AN UPDATE
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col h-screen">
            <div className="w-full">
              <Image src={Images.profileBanner} alt="Profile Banner" className="w-full h-[150px] object-[50%_60%] object-cover border-b border-[#2d2d2d]"/>
            </div>
            <div className="flex flex-row h-screen mx-32">
              <div className="w-1/3 px-8 py-6 bg-[#181818] border-l border-r border-[#2d2d2d] flex-col justify-start items-start gap-5 inline-flex overflow-y-auto">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="text-white text-2xl font-bold font-['Plus Jakarta Sans'] leading-[37.44px]">Carter Cote</div>
                      <Image src={Images.profileBadge} alt="Verified" width={18} height={18} />
                    </div>
                    <div className="h-7 flex-col justify-start items-start gap-1 flex">
                      <div className="self-stretch text-[#a1a1a1] text-lg font-normal font-['Plus Jakarta Sans'] leading-7">BS in Computer Science</div>
                    </div>
                  </div>
                  <Image src={Images.profilePicture1} alt="Profile Picture" className="w-[92px] h-[92px] rounded-[109px] border-2 border-[#fffbfb]"/>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    <div className="justify-start items-start flex">
                      <Image src={Images.profilePicture1} alt="Follower1" className="w-[21px] h-[21px] rounded-[109px] border border-[#5e5e5e]" />
                      <Image src={Images.profilePicture1} alt="Follower2" className="w-[21px] h-[21px] rounded-[109px] border border-[#5e5e5e]" />
                    </div>
                    <div className="text-[#a1a1a1] text-base font-medium font-['Plus Jakarta Sans'] leading-[24.96px]">420 followers</div>
                  </div>
                  <div className="opacity-40 justify-start items-center gap-4 inline-flex">
                    <Image src={Images.discord} alt="Discord Icon" className="w-[22px] h-[22px]" />
                    <Image src={Images.linkedin} alt="LinkedIn Icon" className="w-[22px] h-[22px]" />
                    <Image src={Images.twitter} alt="Twitter Icon" className="w-[22px] h-[22px]" />
                    <Image src={Images.instagram} alt="Instagram Icon" className="w-[22px] h-[22px]" />
                    <div className="w-[3px] h-[3px] bg-[#808991] rounded-[33px]" />
                    <div className="justify-start items-center gap-1.5 flex">
                      <div className="w-[122px] h-[21px] text-white text-base font-medium font-['Plus Jakarta Sans'] leading-[24.96px]">cartercote.com</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-white text-base font-normal font-['Plus Jakarta Sans'] leading-[24.96px]">i'm a 22 y/o software engineer + designer based in Palo Alto, currently studying AI + HCI at Stanford University.</div>
                <div className="self-stretch px-[58px] py-2.5 rounded-xl border border-[#2b2b2b] justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-[#cbcbcb] text-lg font-medium font-['Plus Jakarta Sans'] leading-7">Edit profile</div>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <div className="w-[300px] text-[#a1a1a1] text-lg font-normal font-['Plus Jakarta Sans'] leading-7">Recent wins</div>
                  {Array.from({ length: runRows }, (_, index) => (
                    <div key={index} className="self-stretch py-3 border-b border-[#2b2b2b] justify-between items-center inline-flex">
                      <div className="w-[255px] mr-4 text-white text-sm font-medium font-['Plus Jakarta Sans'] leading-snug">
                        {recentWins[index].text}
                      </div>
                      <div className="justify-start items-center gap-3 flex">
                        <div className="px-2.5 py-0.5 bg-[#484848] rounded-3xl border border-[#353535] justify-start items-center gap-1 flex">
                          <div className="pr-0.5 pt-0.5 pb-1 flex-col justify-center items-center inline-flex">
                            <div className="w-3 h-4 text-black text-xs font-semibold font-['Plus Jakarta Sans'] leading-[18.72px]">🙌</div>
                          </div>
                          <div className="h-4 text-white text-xs font-semibold font-['Plus Jakarta Sans'] leading-[18.72px]">
                            {recentWins[index].reactions}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-2/3 flex flex-col bg-[#181818] border-r border-[#2d2d2d] overflow-y-auto">
                <div className="flex-col items-start gap-2.5 pt-0 pb-[9px] px-8 w-full flex-[0_0_auto] border-b border-[#2d2d2d] flex relative">
                  <div className="h-[50px] items-end justify-around gap-4 self-stretch w-full flex relative">
                    <div className="items-center gap-[21px] flex-1 grow flex relative">
                      <TabButton 
                        label="Profile" 
                        isActive={activeTab === 'profile'} 
                        onClick={() => handleTabClick('profile')} 
                      />
                      <TabButton 
                        label="Resources" 
                        isActive={activeTab === 'resources'} 
                        onClick={() => handleTabClick('resources')} 
                      />
                      <TabButton 
                        label="Demos" 
                        isActive={activeTab === 'demos'} 
                        onClick={() => handleTabClick('demos')} 
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-grow p-8">
                  {activeTab === 'profile' && <ProfileContent />}
                  {activeTab === 'resources' && <ResourcesContent />}
                  {activeTab === 'demos' && <DemosContent />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
