import React from 'react'

type Props = {}

const RequestTableRow = (props: Props) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4">
            John
        </td>
        <td className="px-6 py-4">
            Doe
        </td>
        <td className="px-6 py-4">
            john.doe@example.com
        </td>
        <td className="px-6 py-4">
            Family
        </td>
        <td className="px-6 py-4">
            $40.00
        </td>
        <td className="px-6 py-4">
            Approved
        </td>
        <td className="px-2 py-4">
            <button className="bg-amber-300 rounded py-2 px-4 mr-2">Approve</button>
            <button className="bg-amber-300 rounded py-2 px-4">Reject</button>
        </td>
    </tr>
  )
}

export default RequestTableRow