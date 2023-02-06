interface RequestTableRowProps {
    name: string,
    lastName: string,
    email: string,
    pack: string,
    price: number,
    status: string
}

const RequestTableRow = (props: RequestTableRowProps) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4">
            {props.name}
        </td>
        <td className="px-6 py-4">
            {props.lastName}
        </td>
        <td className="px-6 py-4">
            {props.email}
        </td>
        <td className="px-6 py-4">
            {props.pack}
        </td>
        <td className="px-6 py-4">
            ${props.price}
        </td>
        <td className="px-6 py-4">
            {props.status}
        </td>
        <td className="px-2 py-4">
            { props.status == 'Pending' &&
            <>
                <button className="bg-amber-300 rounded py-2 px-4 mr-2">Approve</button>
                <button className="bg-amber-300 rounded py-2 px-4">Reject</button>
            </>
            }
        </td>
    </tr>
  )
}

export default RequestTableRow