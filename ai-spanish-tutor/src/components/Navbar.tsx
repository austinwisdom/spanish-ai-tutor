import { NavLink } from "react-router-dom";
import { useState } from "react";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


import logo from '../assets/logos/logo2Yellow.svg'
import flag_de from '../assets/logos/flags/flag_de.svg'
import flag_fr from '../assets/logos/flags/flag_fr.svg'
import flag_en from '../assets/logos/flags/flag_en.svg'
import flag_jp from '../assets/logos/flags/flag_jp.svg'
import flag_es from '../assets/logos/flags/flag_es.svg'
import flag_br from '../assets/logos/flags/flag_br.svg'

const Navbar = () => {

  const [activeLanguage, setActiveLanguage] = useState("en")

    return (
        <nav className='justify-center sm:justify-center flex flex-row bg-blue-600'>
        <div className="ml-24">
            <NavLink to={'/'}><img className="h-32 drop-shadow-lg" src={logo}/></NavLink>
        </div>
        <ul className='mx-20 mt-10 h-12  flex flex-row justify-center rounded-2xl border-2'>
        
          <li className='list-none px-4 self-center drop-shadow-lg'>
            <NavLink to={"/"}  className={({ isActive }) => isActive ? 'text-yellow-300 cursor-pointer font-semibold' :  'text-white hover:text-yellow-300 cursor-pointer font-semibold'}><button>
            HOME
            </button>
              
            </NavLink>
          </li>
          <li className='list-none px-4 self-center drop-shadow-lg'>
            <NavLink to={"/lessons"} className={({ isActive }) => isActive ? 'text-yellow-300 cursor-pointer font-semibold' :  'text-white hover:text-yellow-300 cursor-pointer font-semibold'}>LESSONS
              
            </NavLink>
          </li>
          <li className='list-none px-4 self-center drop-shadow-lg'>
            <NavLink to={"/conversation"} className={({ isActive }) => isActive ? 'text-yellow-300 cursor-pointer font-semibold' :  'text-white hover:text-yellow-300 cursor-pointer font-semibold'}>CONVERSATION
              
            </NavLink>
          </li>
          <li className='list-none px-4 self-center drop-shadow-lg'>
            <NavLink to={"/game"} className={({ isActive }) => isActive ? 'text-yellow-300 cursor-pointer font-semibold' :  'text-white hover:text-yellow-300 cursor-pointer font-semibold'}>GAME
              
            </NavLink>
          </li>
          <li className='list-none px-4 self-center drop-shadow-lg text-white font-semibold'>
              <div className="flex w-36">
                <div className="content-center cursor-pointer hover:text-yellow-300">LEARNING: </div>
                <img className="w-10 m-1 content-center cursor-pointer hover:w-12" src={flag_es} />
              </div>
          </li>
          <li>
          <div className="relative inline-block text-left">
  <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Options
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
    <div className="py-1" role="none">
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</div>
          </li>
        </ul>
        
      </nav>
    );
};

export default Navbar;