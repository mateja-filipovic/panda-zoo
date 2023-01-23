import BookNowForm from "@/components/book-now-form"
import ImageWithText from "@/components/image-with-text"
import PageHero from "@/components/page-hero"
import { useState } from "react"


const PackagesPage = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('promotions');

  const handleFilterChange = (newFilterValue: string) => setSelectedFilter(newFilterValue);

  const addBorderIfFilterApplied = (filterValue: string): string => {
    if(selectedFilter !== filterValue)
      return '';
    return 'border-b-4 border-primary'
  }

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
    <div className="mb-20">

      <PageHero imageUrl={'@/assets/hero-image.jpeg'} title={"Title"} subtitle={"Subtitle"} />

      <div className="flex justify-center gap-16 mt-10">
        <h2 className={`font-bold font-quick-sand text-2xl pb-2 hover:cursor-pointer ${addBorderIfFilterApplied('promotions')}`} onClick={() => handleFilterChange('promotions')}>Promotions</h2>
        <h2 className={`font-bold font-quick-sand text-2xl pb-2 hover:cursor-pointer ${addBorderIfFilterApplied('all packages')}`} onClick={() => handleFilterChange('all packages')} >All Packages</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-6 px-12 mt-12 md:grid-cols-3 md:px-40 md:mt-10">
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} textLine1={'Over 900'} textLine2={'Unique animals'} renderBookNowButton={true} textLine1CustomStyle={'text-yellow-custom'} onClickEventDelegate={openModal} />
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} textLine1={'Over 900'} textLine2={'Unique animals'} renderBookNowButton={true} textLine1CustomStyle={'text-yellow-custom'} onClickEventDelegate={openModal} />
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} textLine1={'Over 900'} textLine2={'Unique animals'} renderBookNowButton={true} textLine1CustomStyle={'text-yellow-custom'} onClickEventDelegate={openModal} />
      </div>

    </div>

    {showModal && <BookNowForm closeModalEventDelegate={closeModal}/> }
    
    </>
  )
}

export default PackagesPage