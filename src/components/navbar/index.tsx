import { BellAlertIcon } from '@heroicons/react/24/outline'
import Logo from '@/assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { UserService } from '@/services/user-service'
import { useEffect, useReducer, useState } from 'react'
import Notifications from '../notifications'


const Navbar = () => {

  const [showModal, setShowModal] = useState(false);
  
  const [currentUser] = useState(UserService.getCurrentUser());

  const closeModal = () => {
    setShowModal(false);
  }
 


  const [isMenuHidden, setIsMenuHidden] = useState('hidden');
  const { pathname } = useLocation();

  const toggleMenuVisibility = () => {
    let toggleHidden = (isMenuHidden == '') ? 'hidden' : '';
    setIsMenuHidden(toggleHidden);
  }

  const colorIfActive = (link: string): string => {
    return pathname.includes(link) ? 'text-blue-600' : ''
  }

  return (
    <>
          <style>
        {
          `.dropdown {
            position: relative;
            display: inline-block;
          }
          
          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            padding: 12px 16px;
            z-index: 1;
          }
          
          .dropdown:hover .dropdown-content {
            display: block;
          }`
        }
      </style>

	<nav className="sticky top-0 z-20 px-4 md:px-20 py-4 flex justify-between items-center bg-white shadow-md">

		<a className="text-3xl font-bold leading-none">
      <img alt="logo" src={Logo} className="h-12"/>
		</a>

		<div className="lg:hidden w-full flex justify-end">
			<button className="navbar-burger flex items-center text-blue-600 p-3" onClick={() => toggleMenuVisibility()}>
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>

    
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <Link to="/home" className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 ${colorIfActive('home')}`} aria-current="page">
            HOME
          </Link>
        </li>
        {!(currentUser.role == 'admin') && 
        <li>
            <Link to="/packages" className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 ${colorIfActive('packages')}`} aria-current="page">
              PACKS
            </Link>
        </li>
        }
        {!(currentUser.role == 'admin') &&
          <li>
            <Link to="/events" className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 ${colorIfActive('events')}`} aria-current="page">
              EVENTS
            </Link>
          </li>
        }
        { true &&
        <li>
          <Link to="/animals" className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 ${colorIfActive('animals')}`} aria-current="page">
            ANIMALS
          </Link>
        </li>
        }
        { (currentUser.role == 'admin') &&
        <li>
          <Link to="/add-animal" className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 ${colorIfActive('add-animal')}`} aria-current="page">
            ADD ANIMAL
          </Link>
        </li>
        }
        { (currentUser.role == 'admin') &&
        <li>
          <Link to="/requests" className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 ${colorIfActive('requests')}`} aria-current="page">
            REQUESTS
          </Link>
        </li>
        }
        <li>
          <Link to="/profile" className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 ${colorIfActive('profile')}`} aria-current="page">
            PROFILE
          </Link>
        </li>
		</ul>

    <div className="flex items-center">
    <BellAlertIcon className="h-6 w-6 hidden md:block mr-8" onClick={() => setShowModal(true)}>
    </BellAlertIcon>

      <div className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">
        <Link to="/login"  onClick={() => UserService.logout()}>
          Logout
        </Link>
      </div>
    </div>

	</nav>


	<div className={`navbar-menu relative z-50 ${isMenuHidden}`}>

		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={() => toggleMenuVisibility()}></div>

		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">

			<div className="flex items-center mb-8">
        <a className="text-3xl font-bold leading-none">
          <img alt="logo" src={Logo} className="h-12"/>
        </a>
			</div>

			<div>
				<ul>
					<li className="mb-1">
            <Link to="/home" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"  aria-current="page">
              HOME
            </Link>					
          </li>
          <li className="mb-1">
            <Link to="/packages" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"  aria-current="page">
              PACKS
            </Link>					
          </li>
          <li className="mb-1">
            <Link to="/events" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"  aria-current="page">
              EVENTS
            </Link>					
          </li>
          <li className="mb-1">
            <Link to="/animals" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"  aria-current="page">
              ANIMALS
            </Link>					
          </li>
          <li className="mb-1">
            <Link to="/profile" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"  aria-current="page">
              PROFILE
            </Link>					
          </li>
				</ul>
			</div>

			<div className="mt-auto">
				<div className="pt-6">
        <div className="flex items-center">
          <BellAlertIcon className="h-6 w-6 hidden md:block mr-8" onClick={() => setShowModal(true)}/>

            <div className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">
              <Link to="/login"  onClick={() => UserService.logout()}>
                Logout
              </Link>
            </div>
          </div>
				</div>
			</div>

		</nav>

	</div>

  {showModal && <Notifications closeModalEventDelegate={closeModal}/> }
</>
  )
}


export default Navbar