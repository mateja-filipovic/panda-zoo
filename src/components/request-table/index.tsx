import { ZooRequest } from '@/model/request-zoo'
import RequestTableRow from '../request-table-row'

interface RequestTableProps {
    requests: ZooRequest[]
}

const RequestTable = (props: RequestTableProps) => {
  return (
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-amber-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Pack
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
            {props.requests.map(req => <RequestTableRow name={req.name} lastName={req.lastName} email={req.email} pack={req.pack} price={req.price} status={req.status} /> )}
        </tbody>
    </table>
  )
}

export default RequestTable