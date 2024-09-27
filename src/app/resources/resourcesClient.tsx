'use client';

import { useTheme } from '../../context/ThemeContext';
import Header from "../../components/header";
import Footer from "../../components/footer";
import DashedDivider from "@/components/dashedDivider";
import Articles from "@/components/articles";
import Image from "next/image";
import Images from '../../assets/images';

import {
  plus_jakarta_sans_bold,
  plus_jakarta_sans_extrabold,
  plus_jakarta_sans_thin,
  messina_book,
  messina_light,
  crimson_regular_italic,
  messina_semibold,
  messina_bold,
  crimson_regular,
  plus_jakarta_sans_medium,
} from '../fonts';


interface ResourcesClientProps {
  posts: any[];
}

const ResourcesClient: React.FC<ResourcesClientProps> = ({ posts }) => {
  const { theme } = useTheme();

  return (
    <>
      {/* <Header /> */}
      <div className={`flex flex-col w-full items-center justify-center ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}>
        <div className={`flex flex-col w-[94%] py-20 px-12 ${theme === 'dark' ? 'border-[#242424] bg-dot-white/[0.2]' : 'border-[#E0E0E0] bg-white bg-dot-black/[0.2] '} border-x items-start justify-center gap-y-4`}>
          <div className="flex flex-row w-full justify-between items-end">

            <div className="flex flex-col space-y-[8] z-10">
              <Image
                  src={theme === 'dark' ? Images.sxFull : Images.sxFullBlack}
                  alt="SX Full Logo"
                  width={136}
                  height={27}
                  className="w-[35%] md:w-[60%] h-auto"
              />
              <p className={`md:text-[48px] text-[32px] w-full leading-[125%] tracking-tighter text-left ${plus_jakarta_sans_bold.className} ${theme === 'dark' ? 'text-shadow-white' : ''}`}>BLUEPRINT </p>
            </div>
            <div className="z-10">
              <div className="flex flex-row space-x-2">
                <p className={`${messina_book.className}`}>01</p>
                <p className={` ${theme === 'dark' ? 'text-white' : 'text-black'} ${plus_jakarta_sans_medium.className}`}>BLOG</p>
                {/* credits,  */}
              </div>
            </div>
          </div>

          <div className={`absolute pointer-events-none inset-0 flex items-center justify-center ${theme === 'dark' ? 'bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]' : 'bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,white)]'}`}></div>
          <Articles posts={posts} />

        </div>
        <DashedDivider />
      </div>
      <Footer />
    </>
  );
};

export default ResourcesClient;