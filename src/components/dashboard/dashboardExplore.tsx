import React from 'react';
import Image from "next/image";
import Images from '../../assets/images';
import {
  plus_jakarta_sans_regular,
  plus_jakarta_sans_medium,
  plus_jakarta_sans_semibold,
  plus_jakarta_sans_bold,
  plus_jakarta_sans_extrabold,
  crimson_regular,
  crimson_semibold,
  messina_semibold
} from '../../app/fonts';
import { Button } from '../ui/button';

const DashboardExplore = () => {
    return (
        <div className="p-10 w-full flex flex-row justify-between space-x-4">
            <div className="w-full flex flex-col justify-between space-y-4">
                <div className='w-full bg-zinc-800 rounded-lg p-6 border border-zinc-700 space-y-4'>
                    <div className='space-y-1'>
                        <p className={`${plus_jakarta_sans_semibold.className} text-sm`}>Share what you’re working on</p>
                        <p className={`${plus_jakarta_sans_regular.className} text-xs text-zinc-400 leading-relaxed`}>Unlock countless demos + resources from other builders by posting a demo, or integrating Github or Figma to show your progress. 
                            Start by adding a project. Happy connecting!
                        </p>
                    </div>
                    <div>
                        <Button 
                        href="https://www.notion.so/startup-exchange/Startup-Exchange-Team-Breakdown-411ccdc0abaf46cfaa09c7eb6c2fb613?pvs=4" 
                        variant="secondary" 
                        className={`w-full bg-[#F5AF0230] border py-3 border-[#9D7000] text-yellow-500 px-4 ${messina_semibold.className}`}>
                            Add a project
                        </Button>
                    </div>
                </div>
                
                <div className='w-full bg-zinc-800 rounded-lg border border-zinc-700'>
                    <div className='space-y-1'>
                        <Image 
                          src={Images.post1} 
                          alt="dashboardExplore1" 
                          width={334} 
                          height={200} 
                          className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5 p-4">
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row space-x-1.5 items-center">
                                <p className={`${plus_jakarta_sans_bold.className} text-sm text-zinc-400`}>carter</p>
                                <div className="w-[3px] h-[3px] bg-zinc-400 rounded-full"></div>
                                <p className="text-zinc-400 text-sm"> 4hrs</p>
                            </div>
                            <div className="rounded-full py-1 px-2 bg-[#F5AF0230] border border-[#9D7000]">
                                <p className="text-yellow-500 text-[10px]">DEMO</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-zinc-800 rounded-lg p-6 border border-zinc-700 space-y-4'>
                    <div className='space-y-1'>
                        <p className={`${plus_jakarta_sans_semibold.className} text-sm`}>Share what you’re working on</p>
                        <p className={`${plus_jakarta_sans_regular.className} text-xs text-zinc-400 leading-relaxed`}>Unlock countless demos + resources from other builders by posting a demo, or integrating Github or Figma to show your progress. 
                            Start by adding a project. Happy connecting!
                        </p>
                    </div>
                    <div>
                        <Button 
                        href="https://www.notion.so/startup-exchange/Startup-Exchange-Team-Breakdown-411ccdc0abaf46cfaa09c7eb6c2fb613?pvs=4" 
                        variant="secondary" 
                        className={`w-full bg-[#F5AF0230] border py-3 border-[#9D7000] text-yellow-500 px-4 ${messina_semibold.className}`}>
                            Add a project
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-between space-y-4">
                <div className='w-full bg-zinc-800 rounded-lg p-6 border border-zinc-700 space-y-4'>
                    <div className='space-y-1'>
                        <p className={`${plus_jakarta_sans_semibold.className} text-sm`}>Share what you’re working on</p>
                        <p className={`${plus_jakarta_sans_regular.className} text-xs text-zinc-400 leading-relaxed`}>Unlock countless demos + resources from other builders by posting a demo, or integrating Github or Figma to show your progress. 
                            Start by adding a project. Happy connecting!
                        </p>
                    </div>
                    <div>
                        <Button 
                        href="https://www.notion.so/startup-exchange/Startup-Exchange-Team-Breakdown-411ccdc0abaf46cfaa09c7eb6c2fb613?pvs=4" 
                        variant="secondary" 
                        className={`w-full bg-[#F5AF0230] border py-3 border-[#9D7000] text-yellow-500 px-4 ${messina_semibold.className}`}>
                            Add a project
                        </Button>
                    </div>
                </div>
                
                <div className='w-full bg-zinc-800 rounded-lg p-6 border border-zinc-700 space-y-4'>
                    <div className='space-y-1'>
                        <p className={`${plus_jakarta_sans_semibold.className} text-sm`}>Share what you’re working on</p>
                        <p className={`${plus_jakarta_sans_regular.className} text-xs text-zinc-400 leading-relaxed`}>Unlock countless demos + resources from other builders by posting a demo, or integrating Github or Figma to show your progress. 
                            Start by adding a project. Happy connecting!
                        </p>
                    </div>
                    <div>
                        <Button 
                        href="https://www.notion.so/startup-exchange/Startup-Exchange-Team-Breakdown-411ccdc0abaf46cfaa09c7eb6c2fb613?pvs=4" 
                        variant="secondary" 
                        className={`w-full bg-[#F5AF0230] border py-3 border-[#9D7000] text-yellow-500 px-4 ${messina_semibold.className}`}>
                            Add a project
                        </Button>
                    </div>
                </div>

                <div className='w-full bg-zinc-800 rounded-lg p-6 border border-zinc-700 space-y-4'>
                    <div className='space-y-1'>
                        <p className={`${plus_jakarta_sans_semibold.className} text-sm`}>Share what you’re working on</p>
                        <p className={`${plus_jakarta_sans_regular.className} text-xs text-zinc-400 leading-relaxed`}>Unlock countless demos + resources from other builders by posting a demo, or integrating Github or Figma to show your progress. 
                            Start by adding a project. Happy connecting!
                        </p>
                    </div>
                    <div>
                        <Button 
                        href="https://www.notion.so/startup-exchange/Startup-Exchange-Team-Breakdown-411ccdc0abaf46cfaa09c7eb6c2fb613?pvs=4" 
                        variant="secondary" 
                        className={`w-full bg-[#F5AF0230] border py-3 border-[#9D7000] text-yellow-500 px-4 ${messina_semibold.className}`}>
                            Add a project
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-between space-y-4">
                <div className='w-full bg-zinc-800 rounded-lg p-6 border border-zinc-700 space-y-4'>
                    <div className='space-y-1'>
                        <p className={`${plus_jakarta_sans_semibold.className} text-sm`}>Share what you’re working on</p>
                        <p className={`${plus_jakarta_sans_regular.className} text-xs text-zinc-400 leading-relaxed`}>Unlock countless demos + resources from other builders by posting a demo, or integrating Github or Figma to show your progress. 
                            Start by adding a project. Happy connecting!
                        </p>
                    </div>
                    <div>
                        <Button 
                        href="https://www.notion.so/startup-exchange/Startup-Exchange-Team-Breakdown-411ccdc0abaf46cfaa09c7eb6c2fb613?pvs=4" 
                        variant="secondary" 
                        className={`w-full bg-[#F5AF0230] border py-3 border-[#9D7000] text-yellow-500 px-4 ${messina_semibold.className}`}>
                            Add a project
                        </Button>
                    </div>
                </div>
                
                <div className='w-full bg-zinc-800 rounded-lg p-6 border border-zinc-700 space-y-4'>
                    <div className='space-y-1'>
                        <p className={`${plus_jakarta_sans_semibold.className} text-sm`}>Share what you’re working on</p>
                        <p className={`${plus_jakarta_sans_regular.className} text-xs text-zinc-400 leading-relaxed`}>Unlock countless demos + resources from other builders by posting a demo, or integrating Github or Figma to show your progress. 
                            Start by adding a project. Happy connecting!
                        </p>
                    </div>
                    <div>
                        <Button 
                        href="https://www.notion.so/startup-exchange/Startup-Exchange-Team-Breakdown-411ccdc0abaf46cfaa09c7eb6c2fb613?pvs=4" 
                        variant="secondary" 
                        className={`w-full bg-[#F5AF0230] border py-3 border-[#9D7000] text-yellow-500 px-4 ${messina_semibold.className}`}>
                            Add a project
                        </Button>
                    </div>
                </div>

                <div className='w-full bg-zinc-800 rounded-lg p-6 border border-zinc-700 space-y-4'>
                    <div className='space-y-1'>
                        <p className={`${plus_jakarta_sans_semibold.className} text-sm`}>Share what you’re working on</p>
                        <p className={`${plus_jakarta_sans_regular.className} text-xs text-zinc-400 leading-relaxed`}>Unlock countless demos + resources from other builders by posting a demo, or integrating Github or Figma to show your progress. 
                            Start by adding a project. Happy connecting!
                        </p>
                    </div>
                    <div>
                        <Button 
                        href="https://www.notion.so/startup-exchange/Startup-Exchange-Team-Breakdown-411ccdc0abaf46cfaa09c7eb6c2fb613?pvs=4" 
                        variant="secondary" 
                        className={`w-full bg-[#F5AF0230] border py-3 border-[#9D7000] text-yellow-500 px-4 ${messina_semibold.className}`}>
                            Add a project
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardExplore;
