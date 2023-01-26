import EventsPageBackground from '@/assets/EventsPageBackground.jpeg'

import Card from "@/components/card"
import PageHero from "@/components/page-hero"
import { EventService } from "@/services/event-service"
import { useState } from "react"


const EventsPage = () => {

  const [events] = useState(EventService.getAllevents())
  
  return (
    <div className="mb-20">
      <PageHero imageUrl={EventsPageBackground} title={"Title"} subtitle={"Subtitle"} />
      
      <div className="container mx-auto grid grid-cols-3 gap-8 mt-16 px-36">
        {events.map(event => <Card event={event} />)}
      </div>
    </div>
  )
}

export default EventsPage