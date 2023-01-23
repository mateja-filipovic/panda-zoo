import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface BookNowFormProps {
    closeModalEventDelegate: () => void;
}
const BookNowForm = (props: BookNowFormProps) => {
    
    return(
        <div className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-70 flex justify-center">

            <div className="container mx-auto px-10 py-12">
                <div className="w-full bg-white px-10 py-4 rounded-lg md:py-6">

                <div className="w-full flex justify-end mb-3" onClick={props.closeModalEventDelegate}>
                    <XMarkIcon className="w-8 h-8"/>
                </div>
                <form>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selected Pack</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-6">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adults</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-6">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Children</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-6">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Have a promo code? Enter down below!</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                        </div>

                        <div className="w-full flex justify-end md:justify-start">
                            <button className="w-full bg-amber-300 rounded py-2 px-4 mb-4 md:w-fit">Apply code</button>
                        </div>

                        <div className="w-full flex justify-end">
                            <p>Total: $40.00</p>
                        </div>

                        <div className="w-full flex justify-end mb-6">
                            <p className="text-sm text-slate-500 line-through">$40.00</p>
                        </div>

                        <div className="w-full flex justify-end">
                            <button className="w-full bg-amber-300 rounded py-2 px-4 mb-4 md:w-fit">Submit Request</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
        // <div id="popup-modal" className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-primary bg-opacity-70">
        //     <div className="relative w-full h-full max-w-md md:h-auto">
        //         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        //             <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
        //                 <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //                 <span className="sr-only">Close modal</span>
        //             </button>
        //             <div className="p-6 text-center">
        //                 <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        //                 <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
        //                 <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
        //                     Yes, I'm sure
        //                 </button>
        //                 <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default BookNowForm