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

const ProfileContent = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col gap-2.5">
                    <div className="font-semibold text-white text-lg leading-[28.1px]">
                    What I'm working on
                    </div>
                    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-[#2b2b2b] rounded-xl">
                        <Image src={Images.plus} alt="Plus Icon" className="w-4 h-4 object-cover"/>
                        <div className="text-[#cbcbcb] text-base leading-[25.0px]">
                            Add previous projects
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2.5">
                    <div className="font-semibold text-white text-lg leading-[28.1px]">
                    Looking to meet
                    </div>
                    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-[#2b2b2b] rounded-xl">
                        <Image src={Images.plus} alt="Plus Icon" className="w-4 h-4 object-cover"/>
                        <div className="text-[#cbcbcb] text-base leading-[25.0px]">
                            Who are you trying to meet?
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2.5">
                    <div className="font-semibold text-white text-lg leading-[28.1px]">
                    Skills
                    </div>
                    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-[#2b2b2b] rounded-xl">
                        <Image src={Images.plus} alt="Plus Icon" className="w-4 h-4 object-cover"/>
                        <div className="text-[#cbcbcb] text-base leading-[25.0px]">
                            Add previous projects
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2.5">
                    <div className="font-semibold text-white text-lg leading-[28.1px]">
                    Open to discussing
                    </div>
                    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-[#2b2b2b] rounded-xl">
                        <Image src={Images.plus} alt="Plus Icon" className="w-4 h-4 object-cover"/>
                        <div className="text-[#cbcbcb] text-base leading-[25.0px]">
                            What are you interested in?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileContent;