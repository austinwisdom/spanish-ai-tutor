import { NavLink } from "react-router-dom";
import logo from '../assets/logos/logo2Yellow.svg'

const Navbar = () => {
    return (
        <nav className='justify-between sm:justify-between flex flex-row '>
        <div className="ml-24">
            <NavLink to={'/'}><img className="h-32" src={logo}/></NavLink>
        </div>
        <ul className='w-1/3 mx-20 mt-10 h-10  flex flex-row justify-center bg-red-600 rounded-2xl border-2'>
        
          <li className='list-none px-4 self-center'>
            <NavLink to={"/"}  className={({ isActive }) => isActive ? 'text-yellow-300 cursor-pointer' :  'text-white hover:text-yellow-300 cursor-pointer'}><button>
            Home
            </button>
              
            </NavLink>
          </li>
          <li className='list-none px-4 self-center'>
            <NavLink to={"/lessons"} className={({ isActive }) => isActive ? 'text-yellow-300 cursor-pointer' :  'text-white hover:text-yellow-300 cursor-pointer'}>Lessons
              
            </NavLink>
          </li>
          <li className='list-none px-4 self-center'>
            <NavLink to={"/conversation"} className={({ isActive }) => isActive ? 'text-yellow-300 cursor-pointer' :  'text-white hover:text-yellow-300 cursor-pointer'}>Conversation
              
            </NavLink>
          </li>
        </ul>
        
      </nav>
    );
};

export default Navbar;