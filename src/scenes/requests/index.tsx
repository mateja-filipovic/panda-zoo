import RequestTable from '@/components/request-table'
import RequestsFilter from '@/components/requests-filter'
import React from 'react'

type Props = {}

const RequestsPage = (props: Props) => {
  return (
    <div>
        <div className="container mx-auto w-full px-10 my-8">
            <div className="w-full shadow-lg rounded-lg py-4 px-2">
            <RequestsFilter />
            </div>
        </div>

        <div className="container mx-auto w-full px-10 py-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <RequestTable />
            </div>
        </div>
    </div>
  )
}

export default RequestsPage