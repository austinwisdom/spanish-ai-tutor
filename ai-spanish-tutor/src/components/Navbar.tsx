import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='justify-center sm:justify-end flex flex-row'>
        <ul className='w-2/3 mx-20 mt-10 h-10  flex flex-row justify-end bg-black rounded-2xl border-2'>
        <li className='list-none self-center ml-4'>
            <NavLink to={"/"}  className='text-white mr-96 hover:text-red-700 cursor-pointer'><button>
            <span className="text-blue-400">const</span> austinWisdom = <span className="text-blue-400">new</span> SoftwareEngineer
            </button>
              {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
            </NavLink>
          </li>
          <li className='list-none px-4 self-center'>
            <NavLink to={"/"}  className={({ isActive }) => isActive ? 'text-red-600 cursor-pointer' :  'text-white hover:text-red-700 cursor-pointer'}><button>
            home
            </button>
              {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
            </NavLink>
          </li>
          <li className='list-none px-4 self-center'>
            <NavLink to={"/about"} className={({ isActive }) => isActive ? 'text-red-600 cursor-pointer' :  'text-white hover:text-red-700 cursor-pointer'}>about
              {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
            </NavLink>
          </li>
          <li className='list-none px-4 self-center'>
            <NavLink to={"/projects"} className={({ isActive }) => isActive ? 'text-red-600 cursor-pointer' :  'text-white hover:text-red-700 cursor-pointer'}>projects
              {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
            </NavLink>
          </li>
          <li className='list-none px-4 self-center mr-10'>
            <NavLink to={"/contact"} className={({ isActive }) => isActive ? 'text-red-600 cursor-pointer' :  'text-white hover:text-red-700 cursor-pointer'}>contact
              {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;