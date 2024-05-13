import { NavLink } from "react-router-dom";
import { useState } from "react";

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
// import {ChevronDownIcon} from '@heroicons/react/16/solid'


import logo from '../assets/logos/logo2Yellow.svg'
import flag_de from '../assets/logos/flags/flag_de.svg'
import flag_fr from '../assets/logos/flags/flag_fr.svg'
import flag_us from '../assets/logos/flags/flag_en.svg'
import flag_jp from '../assets/logos/flags/flag_jp.svg'
import flag_es from '../assets/logos/flags/flag_es.svg'
import flag_br from '../assets/logos/flags/flag_pt.svg'

const languages = [
  {code: 'es', href: '/es', label: 'Español', icon: flag_es},
  {code: 'en',href: '/en', label: 'English', icon: flag_us},
  {code: 'de',href: '/de', label: 'Deutsche', icon: flag_de},
  {code: 'pt',href: '/pt', label: 'Português', icon: flag_br},
  {code: 'fr',href: '/fr', label: 'Français', icon: flag_fr},
  {code: 'jp',href: '/jp', label: '日本語', icon: flag_jp}
]

const Navbar = (langStudy:string) => {

  const [activeLanguage, setActiveLanguage] = useState(flag_es)
  console.log(langStudy)

    return (
        <nav className='justify-center sm:justify-center flex flex-row bg-blue-600'>
        <div className="ml-24">
            <NavLink to={'/'}><img className="h-32 drop-shadow-lg" src={logo}/></NavLink>
        </div>
        <ul className='mx-20 mt-10 h-12 px-4 flex flex-row justify-center rounded-2xl border-2'>
        
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
    </ul>
    <div className='list-none px-4 self-center drop-shadow-lg text-right'>
            <div className="content-end w-52">
            <Menu>
              <MenuButton className="items-center rounded-md font-semibold text-white  shadow-white/10 focus:outline-none">
                <div className="flex w-36">
                  <p className="content-center cursor-pointer hover:text-yellow-300"> Learning: </p>
                  <img className="w-10 ml-1 content-center cursor-pointer hover:w-12" src={activeLanguage} />
                  {/* <ChevronDownIcon className="size-4 fill-white" /> */}
                </div>
              </MenuButton>
              <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <MenuItems
                  anchor="bottom end"
                  className="w-52 origin-top-right rounded-xl border border-yellow bg-blue-600 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                >
                  {languages.map((language) => (
                    <>
                      <MenuItem>
                        <button onClick={()=> setActiveLanguage(language.icon)}  className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          {language.label}
                          <img className="w-10 ml-auto content-center cursor-pointer" src={language.icon} />
                        </button>
                      </MenuItem>
                  <div className="my-1 h-px bg-white/5" /></>
                  ))}
                  
                  
                </MenuItems>
              </Transition>
            </Menu>
        </div>
      </div>
        
      </nav>
    );
};

export default Navbar;