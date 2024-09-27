import { useTheme } from '../context/ThemeContext';

const DashedDivider = () => {
  const { theme, styles } = useTheme();
  return (
    <div className={`flex flex-row w-full items-start z-10 justify-start ${styles.backgroundColor}`}>
        <div className={`border-t mt-0.5 border-dashed ${theme === 'dark' ? 'border-[#353535]' : 'border-[#E0E0E0]'} w-[2.85%] h-[5px]`}></div>
        <div className={`w-[5px] h-[5px] ${theme === 'dark' ? 'bg-[#fff]' : 'bg-[#000]'}`}></div>
        <div className={`border-t mt-0.5 border-dashed ${styles.dashedBorderColor} w-[94%] h-[5px]`}></div>
        <div className={`w-[5px] h-[5px] ${theme === 'dark' ? 'bg-[#fff]' : 'bg-[#000]'}`}></div>
        <div className={`border-t mt-0.5 border-dashed ${styles.dashedBorderColor} w-[2.85%] h-[5px]`}></div>
    </div>
  )
}

export default DashedDivider

