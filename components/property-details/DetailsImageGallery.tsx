'use client'

import Image from 'next/image'
import React from 'react'
import imgMain from '../../assets/images/house.png';
import img1 from '../../assets/images/pic-one.png'; 
import img2 from '../../assets/images/pic-two.png'; 

const DetailsImageGallery = () => {
  return (
<div className="grid grid-cols-4 gap-3">
      <div className="col-span-3 md:col-span-2">
        <Image
          src={imgMain}
          alt="Main room"
          width={500}
          height={300}
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 border col-span-3 md:col-span-2">
        {[img1, img2, img2, img1].map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Room ${i + 2}`}
            className="rounded-xl h-48 object-cover"
          />
        ))}
      </div>
    </div>  
    )
}

export default DetailsImageGallery