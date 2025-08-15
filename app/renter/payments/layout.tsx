
import React from 'react'
import logo from "../../../assets/images/RoomLinkNG.png";
import Image from 'next/image';


const PaymentLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <div className="text w-full border-b mx-auto py-7">
        <div className="flex items-center  max-w-7xl mx-auto ml-10">
          <h1 className="text-2xl font-bold text-gray-900">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={150}
              className="inline-block mr-2"
            />
          </h1>
        </div>
        </div>
        {children}
    </div>
  )
}

export default PaymentLayout