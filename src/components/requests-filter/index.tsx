import { ZooRequest } from "@/model/request-zoo";
import { RequestService } from "@/services/requests-service";
import { useState } from "react"

interface RequestsFilterProps {
    onApplyFilter: (reqsToShow: ZooRequest[]) => void;
}
const RequestsFilter = (props: RequestsFilterProps) => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const applyFilter = () => {

        let allRequests = [...RequestService.requests];

        if(name != "")
            allRequests = allRequests.filter(req => req.name.toLowerCase().includes(name.toLowerCase()));
        if(lastName != "")
            allRequests = allRequests.filter(req => req.lastName.toLowerCase().includes(lastName.toLowerCase()));
        if(email != "")
            allRequests = allRequests.filter(req => req.email.toLowerCase().includes(email.toLowerCase()));
        if(status != "")
            allRequests = allRequests.filter(req => req.status.toLowerCase().includes(status.toLowerCase()));

        props.onApplyFilter(allRequests);
    }

    const clearFilters = () => {
        setName('');
        setLastName('')
        setEmail('');
        setStatus('');
    }

  return (
    <div className="w-full">
        <form onSubmit={(event) => event.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 md:px-32 md:py-8">

                <div className="flex flex-col">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setName(e.target.value)} value={name}/>

                    <label className="block mb-2 text-sm font-medium text-gray-900 mt-5">Last Name</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setLastName(e.target.value)} value={lastName}/>

                    <label className="block mb-2 text-sm font-medium text-gray-900 mt-5">Email</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    
                </div>
                
                {/* <div className="flex flex-col">
                    <label className="block mb-2 text-sm font-medium text-gray-900 mt-5 md:mt-0">Date From</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />

                    <label className="block mb-2 text-sm font-medium text-gray-900 mt-5">Date To</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                </div> */}

                <div className="flex flex-col md:justify-between">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 mt-5 md:mt-0">Status</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  onChange={(e) => setStatus(e.target.value)} value={status}/>
                    </div>

                    <div className="flex flex-col">
                        <button className="bg-amber-300 rounded py-2 px-4 mt-8" onClick={() => applyFilter()}>Search</button>
                        <button className="bg-amber-300 rounded py-2 px-4 mt-4" onClick={() => clearFilters()}>Clear</button>
                    </div>
                </div>


            </div>
        </form>
    </div>
  )
}

export default RequestsFilter