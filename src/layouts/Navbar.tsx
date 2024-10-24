import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { isActiveLink } from '../misc/helpers';
import LightButton from '../components/LightButton';
import { HiXMark } from "react-icons/hi2";
import { useAppSelector } from '../app/hooks';
import { bgDarkMode, bgLightMode } from '../misc/styles';

const Navbar = (): React.ReactNode => {
  const [navActive, setNavActive] = useState<boolean>(true)
  const theme = useAppSelector(state => state.theme.theme)

  return (
    <nav
      className={`flex items-center justify-between p-[20px] text-lg`}>
      <h1 className='font-semibold'>Alaa Fayez</h1>
      <div className='flex items-center gap-[16px]'>
        <ul className={`
        flex items-center sm:flex-row ms:justify-between sm:gap-[16px]
        flex-col justify-center gap-[20px]
        duration-300 
        ${theme === "light" ? bgLightMode : bgDarkMode}
        sm:static
        fixed right-0 top-0 bottom-0
      ${navActive ? "left-0" : "left-[120%]"}
        `}>
          <h1 className='font-semibold sm:hidden mb-10'>Alaa Fayez</h1>
          <li>
            <Link
              className={`${isActiveLink("/") ? "font-bold underline" : ""}`}
              to="/"
            >Blog</Link>
          </li>
          <li>
            <Link
              className={`${isActiveLink("/projects") ? "font-bold underline" : ""}`}
              to="/projects"
            >Projects</Link>
          </li>
          <li>
            <Link
              className={`${isActiveLink("/about") ? "font-bold underline" : ""}`}
              to="/about"
            >About</Link>
          </li>
          <li>
            <Link
              className={`${isActiveLink("/newsletter") ? "font-bold underline" : ""}`}
              to="/newsletter"
            >Newsletter</Link>
          </li>

          <LightButton theme={theme} />
          <HiXMark
            onClick={() => setNavActive(false)}
            size={32}
            className='sm:hidden absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer' />
        </ul>

        <FaBars
          onClick={() => setNavActive(true)}
          className='text-xl sm:hidden block cursor-pointer' />
      </div>

    </nav>
  )
}

export default Navbar
