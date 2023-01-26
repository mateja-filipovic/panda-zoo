import PackagesPageBackground from '@/assets/PackagesPageBackground.jpeg'

import BookNowForm from "@/components/book-now-form"
import ImageWithText from "@/components/image-with-text"
import PageHero from "@/components/page-hero"
import { Pack } from "@/model/packs"
import { PackageService } from "@/services/package-service"
import { useState } from "react"


const PackagesPage = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('promotions');
  
  // only promotions are shown at first
  const [packages, setPackages] = useState<Pack[]>(PackageService.getPacks(true));
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);

  const handleFilterChange = (newFilterValue: string) => {

    if(newFilterValue == 'promotions')
      setPackages(PackageService.getPacks(true));
    else
      setPackages(PackageService.getPacks(false));

    setSelectedFilter(newFilterValue);
  }

  const addBorderIfFilterApplied = (filterValue: string): string => {
    if(selectedFilter !== filterValue)
      return '';
    return 'border-b-4 border-primary'
  }

  const openBookNowFormWithSelectedPack = (pack: Pack | null) => {
    if(pack == null)
      return;
    
    setSelectedPack(pack);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
    <div className="mb-20">

      <PageHero imageUrl={PackagesPageBackground} title={"Title"} subtitle={"Subtitle"} />

      <div className="flex justify-center gap-16 mt-10">
        <h2 className={`font-bold font-quick-sand text-2xl pb-2 hover:cursor-pointer ${addBorderIfFilterApplied('promotions')}`} onClick={() => handleFilterChange('promotions')}>Promotions</h2>
        <h2 className={`font-bold font-quick-sand text-2xl pb-2 hover:cursor-pointer ${addBorderIfFilterApplied('all packages')}`} onClick={() => handleFilterChange('all packages')} >All Packages</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-6 px-12 mt-12 md:grid-cols-3 md:px-40 md:mt-10">
        {
          packages.map(pack => <ImageWithText imageUrl={pack.imageUrl} textLine1={pack.name} textLine2={pack.shortDescription} renderBookNowButton={true} textLine1CustomStyle={'text-yellow-custom'} onClickEventDelegate={openBookNowFormWithSelectedPack}  correspondingPack={pack}/> )
        }
      </div>

    </div>

    {showModal && <BookNowForm selectedPack = {selectedPack} closeModalEventDelegate={closeModal}/> }
    
    </>
  )
}

export default PackagesPage