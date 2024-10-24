import React from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { Theme } from '../misc/types';
import { bgDarkMode, bgDarkReverse, bgLightMode, bgLightReverse } from '../misc/styles';
import { useAppDispatch } from '../app/hooks';
import { setTheme } from '../features/theme/themeSlice';

interface Props {
  theme: Theme
}

const LightButton = ({ theme }: Props): React.ReactNode => {
  const dispatch = useAppDispatch()

  return (
    <div className={`
      rounded-3xl flex items-center justify-center gap-[16px] px-2 py-1
      ${theme === "light" ? bgLightReverse : bgDarkReverse}
    `}>
      {theme === "light" ?
        <React.Fragment>
          <MdOutlineWbSunny
            className='cursor-pointer'
            size={24} />
          <div
            onClick={() => dispatch(setTheme("dark"))}
            className={`w-[24px] h-[24px] rounded-full ${bgLightMode}`} />
        </React.Fragment> :
        <React.Fragment>
          <div
            onClick={() => dispatch(setTheme("light"))}
            className={`w-[24px] h-[24px] rounded-full ${bgDarkMode}`} />
          <IoMoonOutline
            className='cursor-pointer'
            size={24} />
        </React.Fragment>}
    </div>
  )
}

export default LightButton
