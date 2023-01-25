import { UserService } from '@/services/user-service';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const LoginForm = (props: Props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  let navigate = useNavigate();

  const login = () => {
    let success: boolean = UserService.login(username, password);

    if(!success)
      return; // display error message

    navigate("/home");
  }

  return (
    <div className="container bg-white rounded-2xl md:rounded-none py-12 px-6 md:py-14 lg:px-6">
      <form onSubmit={(event) => event.preventDefault()}>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="flex justify-center mt-12 w-40 mx-auto">
          <button onClick={() => login()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log in</button>
        </div>

      </form>

    </div>
  )
}

export default LoginForm