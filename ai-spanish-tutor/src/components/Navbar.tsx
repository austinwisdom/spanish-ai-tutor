import { NavLink } from "react-router-dom";
import logo from '../assets/logos/logo2Yellow.svg'

const Navbar = () => {
    return (
        <nav className='justify-center sm:justify-center flex flex-row bg-blue-600'>
        <div className="ml-24">
            <NavLink to={'/'}><img className="h-32" src={logo}/></NavLink>
        </div>
        <ul className='w-1/3 mx-20 mt-10 h-10  flex flex-row justify-center rounded-2xl border-2'>
        
          <li className='list-none px-4 self-center'>
            <NavLink to={"/"}  className={({ isActive }) => isActive ? 'text-yellow-300 cursor-pointer' :  'text-white hover:text-yellow-300 cursor-pointer'}><button>
            HOME
            </button>
              
            </NavLink>
          </li>
          <li className='list-none px-4 self-center'>
            <NavLink to={"/lessons"} className={({ isActive }) => isActive ? 'text-yellow-300 cursor-pointer' :  'text-white hover:text-yellow-300 cursor-pointer'}>LESSONS
              
            </NavLink>
          </li>
          <li className='list-none px-4 self-center'>
            <NavLink to={"/conversation"} className={({ isActive }) => isActive ? 'text-yellow-300 cursor-pointer' :  'text-white hover:text-yellow-300 cursor-pointer'}>CONVERSATION
              
            </NavLink>
          </li>
          <li className='list-none px-4 self-center'>
            <NavLink to={"/game"} className={({ isActive }) => isActive ? 'text-yellow-300 cursor-pointer' :  'text-white hover:text-yellow-300 cursor-pointer'}>GAME
              
            </NavLink>
          </li>
        </ul>
        
      </nav>
    );
};

export default Navbar;