import Footer from '@/components/footer'
import HeroImage from '@/components/hero-image'
import ImageWithText from '@/components/image-with-text'
import TextSection from '@/components/text-section'

const LandingPage = () => {
  return (
    <div>
      <HeroImage></HeroImage>
      <TextSection/>
      <div className="container mx-auto grid grid-cols-3 gap-8 mt-16 px-36">
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} boldText={'Over 900'} normalText={'Unique animals'} />
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} boldText={'Over 900'} normalText={'Unique animals'} />
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} boldText={'Over 900'} normalText={'Unique animals'} />
      </div>
    </div>
  )
}

export default LandingPage