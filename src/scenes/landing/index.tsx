import AnimalsBanner from '@/assets/AnimalsBanner.jpeg'
import EventsBanner from '@/assets/EventsBanner.jpeg'
import PackagesBanner from '@/assets/PackagesBanner.jpeg'


import HeroImage from '@/components/hero-image'
import ImageWithText from '@/components/image-with-text'
import TextSection from '@/components/text-section'

const LandingPage = () => {
  return (

    <div className="mb-20">

      <HeroImage></HeroImage>
      
      <TextSection 
        titleLine1={'PANDA'} 
        titleLine2={'ZOO'} 
        introduction={'Panda Zoo is an incredible animal sanctuary located in the heart of a vibrant city.'} 
        content={'It\'s a place where visitors can explore and learn about many different species of animals, with a focus on endangered and beloved pandas. The zoo is home to over 20 pandas in naturalistic habitats, and the staff is passionate about conservation and educating the public about the importance of preserving these animals. Panda Zoo also offers interactive exhibits, exciting animal shows, and educational programs. Visitors can take a ride on the Panda Express, an open-air train, to get up close and personal with the pandas. Whether you are visiting the zoo with friends or family, Panda Zoo is sure to be a unique and unforgettable experience.'}
        />
      
      <div className="container mx-auto grid grid-cols-1 gap-6 px-12 mt-12 md:grid-cols-3 md:px-40 md:mt-16">
        <ImageWithText imageUrl={AnimalsBanner} textLine1={'Over 900'} textLine2={'Unique animals'} pageUrl={"animals"} />
        <ImageWithText imageUrl={EventsBanner} textLine1={'Incredible events'} textLine2={'Every month'} pageUrl={"events"} />
        <ImageWithText imageUrl={PackagesBanner} textLine1={'Awesome packs'} textLine2={'for families & couples'} pageUrl={"packages"} />
      </div>

    </div>
  )
}

export default LandingPage