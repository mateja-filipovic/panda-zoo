import RequestTable from '@/components/request-table'
import RequestsFilter from '@/components/requests-filter'
import { ZooRequest } from '@/model/request-zoo'
import { RequestService } from '@/services/requests-service'
import { useState } from 'react'

type Props = {}

const RequestsPage = (props: Props) => {

  const [reqs, setReqs] = useState(RequestService.requests);

  const updateReqs = (newReqs: ZooRequest[]) => {
    setReqs(newReqs);
  }
  
  return (
    <div style={{backgroundImage: `url('src/assets/login_background.jpeg')`}} className="bg-cover py-8">
        <div className="container mx-auto w-full px-10">
            <div className="w-full shadow-lg rounded-lg py-4 px-2 bg-white">
            <RequestsFilter onApplyFilter={updateReqs} />
            </div>
        </div>

        <div className="container mx-auto w-full px-10 py-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <RequestTable requests={reqs} />
            </div>
        </div>
    </div>
  )
}

export default RequestsPage