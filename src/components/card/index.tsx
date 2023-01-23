import React, { useState } from 'react'
import { HandThumbUpIcon as HandThumbsUpIconOutlined} from '@heroicons/react/24/outline';
import { HandThumbUpIcon as HandThumbsUpIconSolid } from '@heroicons/react/24/solid'

interface CardProps {
    imageUrl: string;
    title: string;
    textContent: string;
}

const Card = (props: CardProps) => {

    const [renderOutlinedLikeButton, setRenderOutlinedLikeButton] = useState(true)

    const toggleLike = () => {
        setRenderOutlinedLikeButton(!renderOutlinedLikeButton);
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">

            <div className={`bg-[url('${props.imageUrl}')] h-60 relative`}>
                <div className="absolute top-0 right-4 bg-primary flex flex-col items-center">
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg" onClick={toggleLike}>
                        {/* conditional render outline/solid */}
                        { renderOutlinedLikeButton && <HandThumbsUpIconOutlined className="h-12 w-12 text-black"/> }
                        { !renderOutlinedLikeButton && <HandThumbsUpIconSolid className="h-12 w-12 text-black"/> }
                    </button>
                    <p className="text-black pb-2">12</p>
                </div>
            </div>

            <div className="p-5">
                <a>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 font-quick-sand text-xl">
                        {props.title}
                    </h5>
                </a>

                <p className="mb-3 font-normal font-nunito text-gray-introduction">
                    {props.textContent}
                </p>
            </div>

        </div>
    )
}

export default Card