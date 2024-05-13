//@ts-nocheck
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
// import {ChevronDownIcon} from '@heroicons/react/16/solid'
import logo from '../assets/logos/logo2Yellow.svg'

// to-do list:
// 1. change AI tutor to match study lang
// 2. setup vocab database in rails and deploy
//  - verbs with conjugations model
//  - helpful phrases model
//    - category of phrase
// 3. add user Profile, settings

const Navbar = ({languages, langStudy, setLangStudy}, ...props:any) => {

  const [icon, setIcon] = useState(langStudy.icon)

  //click handler to call setlangstudy hook from app.tsx
  const clickHandler = (id) => {
    const newLang = languages.find((element) => element.id === id)
    setLangStudy(newLang)
  }

    return (
        langStudy && (<nav className='justify-center sm:justify-center flex flex-row bg-blue-600'>
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
                  <img className="w-10 ml-1 content-center cursor-pointer hover:w-12" src={langStudy.icon} />
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
                        <button onClick={(event)=> clickHandler(language.id)}  className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
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
        
      </nav>)
    );
};

export default Navbar;