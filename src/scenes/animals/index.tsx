import ImageWithText from '@/components/image-with-text'
import PageHero from '@/components/page-hero'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const AnimalsPage = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const handlePaginationClick = (moveDirection: number) => {
    let newCurrentPage:number = currentPage + moveDirection;

    if(newCurrentPage == 0)
      setCurrentPage(1);
    else if(newCurrentPage > 3)
      setCurrentPage(3);
    else
      setCurrentPage(newCurrentPage);
  }

  return (
    <div className="mb-20">
      <PageHero imageUrl={'@/assets/hero-image.jpeg'} title={"Title"} subtitle={"Subtitle"} />
      <div className="container mx-auto flex justify-center">
        <hr className="h-1 my-8 bg-primary border-0 w-60" />
      </div>
      <div className="container mx-auto grid grid-cols-5 gap-4 mt-4">
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} textLine1={'Over 900'} routeToAnimalDetails={true} textLine1CustomStyle={'text-yellow-custom'}/>
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} textLine1={'Over 900'} routeToAnimalDetails={true} textLine1CustomStyle={'text-yellow-custom'}/>
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} textLine1={'Over 900'} routeToAnimalDetails={true} textLine1CustomStyle={'text-yellow-custom'}/>
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} textLine1={'Over 900'} routeToAnimalDetails={true} textLine1CustomStyle={'text-yellow-custom'}/>
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} textLine1={'Over 900'} routeToAnimalDetails={true} textLine1CustomStyle={'text-yellow-custom'}/>
      </div>

      <div className="flex justify-center items-center mt-12">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white rounded-lg hover:bg-gray-100" onClick={() => handlePaginationClick(-1)}>
            <ChevronDoubleLeftIcon className="h-6 w-6"/>
        </button>
        <p className="ml-3 mr-3"> Page {currentPage} of 3 </p>
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white rounded-lg hover:bg-gray-100" onClick={() => handlePaginationClick(1)}>
            <ChevronDoubleRightIcon className="h-6 w-6"/>        
        </button>
      </div>

    </div>
  )
}

export default AnimalsPage