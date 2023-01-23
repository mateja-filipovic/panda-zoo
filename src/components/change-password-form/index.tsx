import { XMarkIcon } from "@heroicons/react/24/outline";

interface ChangePasswordFormProps {
    closeModalEventDelegate: () => void;
}

const ChangePasswordForm = (props: ChangePasswordFormProps) => {
    
    return(
        <div className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-70 flex justify-center">

            <div className="container mx-auto px-10 py-12">
                <div className="w-full bg-white px-10 py-4 rounded-lg md:py-6">

                <div className="w-full flex justify-end mb-3" onClick={() => props.closeModalEventDelegate()}>
                    <XMarkIcon className="w-8 h-8"/>
                </div>
                <form>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old password</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                    </div>
                    

                    <div className="w-full flex justify-end">
                        <button className="w-full bg-amber-300 rounded py-2 px-4 mb-4 md:w-fit">Change password</button>
                    </div>
                </form>

                </div>
            </div>

        </div>
    )
}

export default ChangePasswordForm