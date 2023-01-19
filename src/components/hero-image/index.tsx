// tsrafce

import React from 'react'

type Props = {}

const HeroImage = (props: Props) => {
  return (
    <div className="w-full h-screen bg-[url('@/assets/hero-image.jpeg')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border-4 border-primary p-5 rounded-md">
            <h1 className=" text-center text-8xl text-white font-bold drop-shadow-lg font-quick-sand">
                Panda Zoo
            </h1>
            <p className="mt-5 text-center text-4xl text-white font-nunito font-semibold">
                A place of incredible adventures
            </p>
        </div>
    </div>
  )
}

export default HeroImage