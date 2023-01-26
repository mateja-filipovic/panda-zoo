import React, { useState } from 'react'
import { HandThumbUpIcon as HandThumbsUpIconOutlined} from '@heroicons/react/24/outline';
import { HandThumbUpIcon as HandThumbsUpIconSolid } from '@heroicons/react/24/solid'
import { EventZoo } from '@/model/event-zoo';
import { EventService } from '@/services/event-service';

interface CardProps {
    event: EventZoo;
}

const Card = (props: CardProps) => {

    const [isLiked, setIsLiked] = useState(props.event.isLiked)
    const [eventLikes, setEventLikes] = useState(props.event.numberOfLikes)

    const toggleLike = () => {
        if(isLiked){
            setEventLikes(eventLikes - 1);
            EventService.dislikeEvent(props.event.id);
        }
        else{
            setEventLikes(eventLikes + 1);
            EventService.likeEvent(props.event.id);
        }
        setIsLiked(!isLiked);
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">

            <div style={{backgroundImage: `url(${props.event.imageUrl})`}} className={`h-60 relative bg-cover`}>
                <div className="absolute top-0 right-4 bg-primary flex flex-col items-center">
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg" onClick={toggleLike}>
                        {/* conditional render outline/solid */}
                        { !isLiked && <HandThumbsUpIconOutlined className="h-12 w-12 text-black"/> }
                        {  isLiked && <HandThumbsUpIconSolid className="h-12 w-12 text-black"/> }
                    </button>
                    <p className="text-black pb-2">{eventLikes}</p>
                </div>
            </div>

            <div className="p-5">
                <a>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 font-quick-sand text-xl">
                        {props.event.title}
                    </h5>
                </a>

                <p className="mb-3 font-normal font-nunito text-gray-introduction">
                    {props.event.description}
                </p>
            </div>

        </div>
    )
}

export default Card