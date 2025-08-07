'use client'

import React from 'react'

const DetailsLandlordCard = () => {
  return (
<div className="flex items-center justify-between p-4 rounded-xl border">
      <div className="flex items-center space-x-3">
        <img
          src="/landlord.jpg"
          alt="Landlord"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium">Gladys Adedeji</p>
          <p className="text-xs text-muted-foreground">Landlord</p>
        </div>
      </div>
      <button className="border px-4 py-1.5 rounded-md text-sm">Send a message</button>
    </div>
)
}

export default DetailsLandlordCard