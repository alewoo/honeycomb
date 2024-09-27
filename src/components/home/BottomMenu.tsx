import Image from "next/image";
import Images from '../../assets/images';
import SiteMenu from "../siteMenu";
import { useTheme } from '../../context/ThemeContext';
import {
    plus_jakarta_sans_extrabold
} from '../../app/fonts';

const BottomMenu = () => {
  const { theme, styles } = useTheme();
    return (
      <>
        <div className={`relative flex flex-col w-full ${styles.textColor} ${styles.backgroundColor}`}>
          {/* Background image */}
          <div className={`absolute inset-0 z-0 ${theme === 'dark' ? 'opacity-40' : 'opacity-20'}`}>
            <Image
                src={Images.rocketBackdrop}
                alt="Background Rocket"
                layout="fill"
                objectFit="cover"
            />
          </div>
          <div className={`${styles.borderColor} md:mx-11 mx-5 py-[52px] border-x border-t z-10`}>
            <div className={`flex flex-col px-28 py-28 items-center align-center justify-center z-10`}>
              <Image
                  src={theme === 'dark' ? Images.sxLogo : Images.sxLogoBlack}
                  alt="SX Full Logo"
                  width={200}
                  height={200}
              />
              <h1 className={`text-[14px] leading-[125%] text-center ${plus_jakarta_sans_extrabold.className}`}>STARTUP EXCHANGE</h1>
            </div>
            <div className="flex flex-row w-full items-center align-center justify-center z-10">
              <SiteMenu />
            </div>
          </div>
        </div>
        {/* <div className={`flex flex-row w-full ${styles.backgroundColor}`}>
          <div className={`${styles.borderColor} md:mx-11 mx-5 py-[24px] w-full border-x border-t z-10`}>
          </div>
        </div> */}
      </>
    )
  }
  
  export default BottomMenu;