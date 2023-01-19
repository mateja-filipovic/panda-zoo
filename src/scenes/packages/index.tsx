import ImageWithText from "@/components/image-with-text"
import PageHero from "@/components/page-hero"


const PackagesPage = () => {
  return (
    <div className="mb-20">
      <PageHero imageUrl={'@/assets/hero-image.jpeg'} title={"Title"} subtitle={"Subtitle"} />
      <div className="flex justify-center gap-16 mt-10">
        <h2>Promotions</h2>
        <h2>All Packages</h2>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-8 mt-16 px-36">
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} boldText={'Over 900'} normalText={'Unique animals'} renderBookNowButton={true} />
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} boldText={'Over 900'} normalText={'Unique animals'} renderBookNowButton={true} />
        <ImageWithText imageUrl={'@/assets/hero-image.jpeg'} boldText={'Over 900'} normalText={'Unique animals'} renderBookNowButton={true} />
      </div>
    </div>
  )
}

export default PackagesPage