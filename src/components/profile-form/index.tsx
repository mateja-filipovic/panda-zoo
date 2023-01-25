import { UserService } from '@/services/user-service';
import React, { useState } from 'react'

interface ProfileformProps {
  changePasswordDelegate: () => void;
}

const ProfileForm = (props: ProfileformProps) => {

  const [userId] = useState(UserService.getCurrentUser()?.id);
  const [username, setUsername] = useState(UserService.getCurrentUser()?.username);
  const [password, setPassword] = useState(UserService.getCurrentUser()?.password);
  const [name, setName] = useState(UserService.getCurrentUser()?.name);
  const [lastName, setLastName] = useState(UserService.getCurrentUser()?.lastName);
  const [phoneNumber, setPhoneNumber] = useState(UserService.getCurrentUser()?.phoneNumber);
  const [email, setEmail] = useState(UserService.getCurrentUser()?.email);

  const handleSaveChangesClick = () => {

  }



  return (
    <div className="container bg-white lg:rounded-3xl rounded-2xl py-6 px-6 md:py-14 md:px-12">
      <form onSubmit={(event) => event.preventDefault()}>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input type="text" value={username} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" value={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
          <input type="text" value={password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
          <input type="text" value={phoneNumber} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setPhoneNumber(e.target.value)}/>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
          <input type="text" value={email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="w-full flex justify-end">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Save Changes</button>
        </div>
      </form>

      <div className="w-full flex justify-end mt-6">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => props.changePasswordDelegate()}>
          Change Password
          </button>
      </div>

    </div>
  )
}

export default ProfileForm