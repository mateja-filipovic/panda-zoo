import AnimalsPageHero from '@/assets/AnimalsBackground.jpeg'

import ImageWithText from '@/components/image-with-text'
import PageHero from '@/components/page-hero'
import { AnimalService } from '@/services/animal-service'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const AnimalsPage = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [animals] = useState(AnimalService.getAllAnimals())

  const handlePaginationClick = (moveDirection: number) => {
    let newPage = currentPage + moveDirection;

    if(newPage == -1)
      return;
    if(newPage == getNumberOfPages())
    return

    setCurrentPage(newPage);
  }

  const getNumberOfPages = () => {
    console.log('there is animals', animals.length);
    return (animals.length % 5 == 0) ?
      Math.floor(animals.length / 5) : Math.floor(animals.length / 5) + 1;
  }

  return (
    <div className="mb-20">
      <PageHero imageUrl={AnimalsPageHero} title={"Animals"} subtitle={"Meet our awesome residents!"} />
      <div className="container mx-auto flex justify-center">
        <hr className="h-1 my-8 bg-primary border-0 w-60" />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 px-8 md:px-0">
        {animals
          .slice(currentPage * 5, 5 * (currentPage + 1))
          .map(animal => {
            return <ImageWithText imageUrl={animal.imageUrl} textLine1={animal.name} animalId={animal.id} textLine1CustomStyle={'text-yellow-custom'}/>
        })}

      </div>

      <div className="flex justify-center items-center mt-12">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white rounded-lg hover:bg-gray-100" onClick={() => handlePaginationClick(-1)}>
            <ChevronDoubleLeftIcon className="h-6 w-6"/>
        </button>
        <p className="ml-3 mr-3"> Page {currentPage + 1} of {getNumberOfPages()} </p>
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white rounded-lg hover:bg-gray-100" onClick={() => handlePaginationClick(1)}>
            <ChevronDoubleRightIcon className="h-6 w-6"/>        
        </button>
      </div>

    </div>
  )
}

export default AnimalsPage