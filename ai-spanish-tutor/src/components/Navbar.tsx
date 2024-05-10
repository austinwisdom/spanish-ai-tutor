import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/logos/logo2Yellow.svg'

const Navbar = () => {

  const [activeLanguage, setActiveLanguage] = useState("en")

    return (
        <nav className='justify-center sm:justify-center flex flex-row bg-blue-600'>
        <div className="ml-24">
            <NavLink to={'/'}><img className="h-32 drop-shadow-lg" src={logo}/></NavLink>
        </div>
        <ul className='mx-20 mt-10 h-10  flex flex-row justify-center rounded-2xl border-2'>
        
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
              <div>
                <div>LEARNING: </div>
                <img  />
              </div>
          </li>
        </ul>
        
      </nav>
    );
};

export default Navbar;