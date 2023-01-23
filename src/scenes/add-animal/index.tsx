import AddAnimalForm from '@/components/add-animal-form'
import React from 'react'

type Props = {}

const AddAnimalPage = (props: Props) => {
  return (
    <div className="container mx-auto px-4 my-10 md:px-32">
      <div className="w-full rounded-lg shadow-lg">
        <AddAnimalForm />
      </div>
    </div>
  )
}

export default AddAnimalPage