import React, { useState } from 'react'
import { HandThumbUpIcon as HandThumbsUpIconOutlined} from '@heroicons/react/24/outline';
import { HandThumbUpIcon as HandThumbsUpIconSolid } from '@heroicons/react/24/solid'

interface CardProps {
    imageUrl: string;
}

const Card = (props: CardProps) => {

    const [renderOutlinedLikeButton, setRenderOutlinedLikeButton] = useState(true)

    const toggleLike = () => {
        setRenderOutlinedLikeButton(!renderOutlinedLikeButton);
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <div className={`bg-[url('${props.imageUrl}')] h-60 relative`}>
                <div className="absolute top-0 right-4 bg-blue-700 flex flex-col items-center">
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg" onClick={toggleLike}>
                        {/* conditional render outline/solid*/}
                        { renderOutlinedLikeButton && <HandThumbsUpIconOutlined className="h-12 w-12"/> }
                        { !renderOutlinedLikeButton && <HandThumbsUpIconSolid className="h-12 w-12"/> }
                    </button>
                    <p className="text-white">12 likes</p>
                </div>
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
    )
}

export default Card