import { BellAlertIcon } from '@heroicons/react/24/outline'
import Logo from '@/assets/logo.png'
import { Link } from 'react-router-dom'

type Props = {}


const Navbar = (props: Props) => {

  return (
<nav className="bg-white sticky top-0 px-2 sm:px-4 py-2.5 left-0 border-b border-gray-200 z-20">
  
  <div className="container flex flex-wrap items-center justify-between mx-auto">

    <a href="https://flowbite.com/" className="flex items-center">
        <img alt="logo" src={Logo} className="h-12"/>
    </a>

    <div className="flex md:order-2 items-center">
        <BellAlertIcon className="h-6 w-6" />
        <a className=" bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ml-4">
          <Link to="/login" className="block py-2 pl-3 pr-4 text-white rounded md:p-0" aria-current="page">
              Logout
          </Link>
        </a>
        <button data-collapse-toggle="navbar-sticky" type="button" className="ml-48 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>

    </div>

    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
        
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">
            HOME
          </Link>
        </li>
        
        <li>
          <Link to="/packages" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
            PACKAGES
            </Link>
        </li>
        <li>
          <Link to="/events" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
            EVENTS
          </Link>
        </li>

        <li>
          <Link to="/animals" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
            ANIMALS
          </Link>
        </li>

        <li>
          <Link to="/profile" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
            PROFILE
          </Link>
        </li>

      </ul>

    </div>

  </div>

</nav>
  )
}

export default Navbar