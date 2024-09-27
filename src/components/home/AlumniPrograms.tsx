import Link from "next/link";
import Image from "next/image";
import Images from '../../assets/images';
import { useTheme } from '../../context/ThemeContext';
import {
    plus_jakarta_sans_medium,
} from '../../app/fonts';

const programLogos = [
  { name: "forbes", black: "forbesBlack", href: "https://forbes.com/" },
  { name: "buildspace", black: "buildspaceBlack", href: "https://buildspace.so/" },
  { name: "kleinerPerkins", black: "kleinerPerkinsBlack", href: "https://fellows.kleinerperkins.com/" },
  { name: "contrary", black: "contraryBlack", href: "https://www.contrary.com/partners" },
  { name: "zfellows", black: "zfellowsBlack", href: "https://www.zfellows.com/" },
  { name: "eightVC", black: "eightVCBlack", href: "https://www.8vc.com/fellowships" },
  { name: "antler", black: "antlerBlack", href: "https://www.antler.co/" },
  { name: "commit", black: "commitBlack", href: "" },
  { name: "neo", black: "neoBlack", href: "https://neo.com/" },
  { name: "onDeck", black: "onDeckBlack", href: "https://www.beondeck.com/" },
  { name: "reactor", black: "reactorBlack", href: "https://www.floodgate.com/" },
  { name: "unusual", black: "unusualBlack", href: "https://www.unusual.vc/" },
];

const AlumniPrograms = () => {
  const { theme, styles } = useTheme();
  return (
    <div className={`flex flex-col w-full ${styles.backgroundColor} ${styles.textColor} gap-y-4`}>
      <div className={`flex flex-col md:mx-11 mx-5 pt-[75px] pb-[25px] ${styles.borderColor} border-x`}>
        <div className="flex flex-col w-full px-12 items-start justify-start lg:space-y-10 space-y-0">
          <h1 className={`w-[85%] md:text-[58px] text-[32px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>SX alumni are backed by the best.</h1>
          <h2 className={`w-[85%] md:text-[24px] text-[18px] leading-[125%] ${plus_jakarta_sans_medium.className}`}>→ See what members are up to this summer.</h2>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-4 mt-[75px] ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'} border-[#242424] border-dashed border-t md:border-b`}>
          {programLogos.map((item, index) => (
            <div key={index} className={`flex flex-col border-r border-b border-dashed ${theme === 'dark' ? 'border-[#323232]' : 'border-[#e0e0e0]'} py-16 px-24 align-center items-center justify-center`}>
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={theme === 'dark' ? Images[item.name] : Images[item.black]}
                  alt={item.name}
                  height={60}
                  className={`${theme === 'dark' ? 'opacity-80 hover:opacity-100' : 'opacity-80 hover:opacity-40'} transition duration-500`}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlumniPrograms;