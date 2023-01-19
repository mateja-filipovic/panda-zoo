import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const LoginForm = (props: Props) => {
  
  let navigate = useNavigate();

  const changeRoute = () => {
    // check if login exists!
    let path = "/"
    navigate(path);
  }

  return (
    <div className="container bg-white rounded-2xl md:rounded-none py-12 px-6 md:py-14 md:px-12">
      <form>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div className="flex justify-center mt-12 w-40 mx-auto">
          <button onClick={changeRoute} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Password</button>
        </div>
      </form>

    </div>
  )
}

export default LoginForm