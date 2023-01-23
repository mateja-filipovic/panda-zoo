import React from 'react'
import RequestTableRow from '../request-table-row'

type Props = {}

const RequestTable = (props: Props) => {
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
            <RequestTableRow />
            <RequestTableRow />
            <RequestTableRow />
            <RequestTableRow />
        </tbody>
    </table>
  )
}

export default RequestTable