
const RequestsFilter = () => {
  return (
    <div className="w-full">
        <form>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 md:px-32 md:py-8">

                <div className="flex flex-col">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" />

                    <label className="block mb-2 text-sm font-medium text-gray-900 mt-5">Last Name</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" />

                    <label className="block mb-2 text-sm font-medium text-gray-900 mt-5">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" />
                    
                </div>
                
                <div className="flex flex-col">
                    <label className="block mb-2 text-sm font-medium text-gray-900 mt-5 md:mt-0">Date From</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" />

                    <label className="block mb-2 text-sm font-medium text-gray-900 mt-5">Date To</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" />
                </div>

                <div className="flex flex-col md:justify-between">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 mt-5 md:mt-0">Status</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" />
                    </div>

                    <div className="flex flex-col">
                        <button className="bg-amber-300 rounded py-2 px-4 mt-8">Search</button>
                        <button className="bg-amber-300 rounded py-2 px-4 mt-4">Clear</button>
                    </div>
                </div>


            </div>
        </form>
    </div>
  )
}

export default RequestsFilter