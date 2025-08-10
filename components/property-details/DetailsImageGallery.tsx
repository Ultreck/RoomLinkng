'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'
import imgMain from '../../assets/images/house.png';

type ImgProps = {
  blurDataURL?: string;
  blurHeight?: number;
  blurWidth?: number;
  height?: number;
  src?: string | StaticImageData;
  width?: number;
}

type DetailGalleryProps = {
  imgs?: ImgProps[];
  mainImg: string | StaticImageData;
}
const DetailsImageGallery = ({imgs, mainImg}: DetailGalleryProps) => {
  console.log(mainImg);
  console.log(imgs);
  return (
<div className="grid grid-cols-4 gap-3 mx-auto">
      <div className="col-span-4 md:col-span-2">
        <Image
          src={imgMain}
          alt="Main room"
          width={500}
          height={300}
          className="w-full h-96 rounded-3xl object-cover"
          />
      </div>
      <div className="grid sm:grid-cols-2 gap-2 col-span-4 md:col-span-2">
        {imgs?.slice(0, 4)?.map((img, i) => (
          <Image
            key={i}
            src={img?.src ?? ''}
            alt={`Room ${i + 2}`}
            width={500}
            height={200}
            className="rounded-3xl w-full h-48 object-cover"
            />
        ))}
      </div>
    </div>  
    )
}

export default DetailsImageGallery