import Card from "@/components/card"
import PageHero from "@/components/page-hero"


const EventsPage = () => {
  return (
    <div className="mb-20">
      <PageHero imageUrl={'@/assets/hero-image.jpeg'} title={"Title"} subtitle={"Subtitle"} />
      
      <div className="container mx-auto grid grid-cols-3 gap-8 mt-16 px-36">
        <Card imageUrl={'@/assets/hero-image.jpeg'} title={"Noteworthy technology acquisitions 2021"} textContent={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} />
        <Card imageUrl={'@/assets/hero-image.jpeg'} title={"Noteworthy technology acquisitions 2021"} textContent={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} />
        <Card imageUrl={'@/assets/hero-image.jpeg'} title={"Noteworthy technology acquisitions 2021"} textContent={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} />
      </div>
    </div>
  )
}

export default EventsPage