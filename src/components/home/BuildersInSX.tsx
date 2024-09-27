import { Button } from "@/components/ui/button";
import { useTheme } from '../../context/ThemeContext';
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import { builders } from '../../data/buildersData';

import {
    plus_jakarta_sans_medium,
    plus_jakarta_sans_regular,
    plus_jakarta_sans_semibold,
    crimson_regular_italic,
    messina_book
} from '../../app/fonts';

const BuildersInSX = () => {
  const { styles, theme } = useTheme();
  return (
    <div className={`flex flex-col w-[100%] ${styles.textColor} ${styles.backgroundColor}`}>
      <div className={`flex flex-col md:mx-11 mx-5 py-[75px] gap-y-20 ${styles.borderColor} border-x`}>
        <div
          className={`flex flex-col w-full items-start px-12 justify-start border-b pb-24 space-y-10 ${styles.borderColor}`}>
            <h1 className={`md:w-[85%] md:text-[58px] text-[32px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>SX is the <span className={`${crimson_regular_italic.className} tracking-tight md:text-[68px] text-[42px]`}>{' '}community{' '}</span>for the most ambitious college students passionate about their <span className={`${crimson_regular_italic.className} tracking-tight md:text-[68px] text-[42px]`}>{' '}ideas.{' '}</span></h1>
            <p className={`md:text-[32px] ${theme === 'dark' ? 'text-gray-400' : 'text-black'} text-[18px] leading-[150%] ${plus_jakarta_sans_regular.className}`}>Our community helps you grow <span className={`${crimson_regular_italic.className} tracking-tight md:text-[38px] text-[21px]`}>{' '}from -1 to 1.{' '}</span></p>
        </div>
        <div
          className="flex flex-row w-full px-12 justify-between align-center items-center">
            <h1 className={`${styles.textColor} md:w-[85%] md:text-[58px] text-[32px] leading-[125%] ${plus_jakarta_sans_medium.className}`}> Builders in SX</h1>
            <Button href="/community" variant="outline" className={`py-3 px-5  ${theme === 'dark' ? 'bg-black text-white border border-[#232323]' : 'bg-white text-black border border-[#e0e0e0]'}`}>
              <div className={`${messina_book.className} font-bold`}>
              VIEW ALL {'>'}
              </div>
            </Button>
        </div>
        <div className="flex flex-col w-full">
          <Marquee className="gap-x-9" speed={45} loop={0}>
            <div className="flex flex-row gap-4">
                {builders.map((builder, index) => (
                  <div key={index} className={`flex flex-col min-w-[200px] max-w-[250px] ${index === builders.length - 1 ? 'mr-[-20px]' : ''}`}>
                    <div className={`relative border ${styles.borderColor} border-dashed`} style={{ height: '238px' }}>
                      <Image src={builder.pic} layout="fill" objectFit="cover" className={``} alt="sx" />
                      <p className={`absolute bottom-2 right-2 text-gray-200 text-[14px] ${messina_book.className}`}>{builder.category.toUpperCase()}</p>
                    </div>
                    <div className={`border border-dashed p-5 space-y-4 ${styles.borderColor}`}>
                        <p className={`text-[15px] leading-[150%] ${styles.textColor} ${plus_jakarta_sans_semibold.className}`} style={{ minHeight: '70px' }}>{builder.oneLiner}</p>
                        <div className="flex flex-row justify-between items-center">
                            <Link href={builder.link} target="_blank" rel="noopener noreferrer">
                                <div className={`rounded-full border ${theme === 'dark' ? 'border-[#242424] text-white hover:text-black hover:bg-white hover:bg-opacity-80' : 'border-[#e0e0e0] text-black hover:bg-gray-300 hover:bg-opacity-40'} bg-transparent transition duration-500 px-3 py-1`}>
                                    <div className={`${messina_book.className} text-xl font-bold`}>
                                        →
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                  </div>
                ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default BuildersInSX