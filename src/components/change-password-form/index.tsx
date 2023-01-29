import { User } from "@/model/user";
import { UserService } from "@/services/user-service";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface ChangePasswordFormProps {
    closeModalEventDelegate: () => void;
}

const ChangePasswordForm = (props: ChangePasswordFormProps) => {
    
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleChangePassword = () => {
        let currentUser: User = UserService.getCurrentUser();
        console.log(currentUser);

        if(newPassword == '' || confirmNewPassword == '' || oldPassword == ''){
            setErrorMessage('All fields required')
            return;
        }
        
        if(newPassword != confirmNewPassword){
            setErrorMessage('New password and confirmation do not match');
            return;
        }

        if(oldPassword != currentUser.password){
            setErrorMessage('Wrong old password');
            return;
        }


        let result = UserService.updateUserPassword(currentUser.id, newPassword);
        if(!result)
            setErrorMessage('Failed to update password');

        setErrorMessage('');
        props.closeModalEventDelegate();
    }

    return(
        <div className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-70 flex justify-center">

            <div className="container mx-auto px-10 py-12">
                <div className="w-full bg-white px-10 py-4 rounded-lg md:py-6">

                <div className="w-full flex justify-end mb-3" onClick={() => props.closeModalEventDelegate()}>
                    <XMarkIcon className="w-8 h-8"/>
                </div>
                <form onSubmit={(event) => event.preventDefault()}>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old password</label>
                        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setOldPassword(e.target.value)}/>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setNewPassword(e.target.value)}/>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm</label>
                        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setConfirmNewPassword(e.target.value)}/>
                    </div>

                    { errorMessage != '' &&
                        <p className="text-sm font-nunito text-center text-red-500 opacity-70">
                            {errorMessage}
                        </p>
                    }
                    

                    <div className="w-full flex justify-end">
                        <button className="w-full bg-amber-300 rounded py-2 px-4 mb-4 md:w-fit" onClick={() => handleChangePassword()}>Change password</button>
                    </div>
                </form>

                </div>
            </div>

        </div>
    )
}

export default ChangePasswordForm