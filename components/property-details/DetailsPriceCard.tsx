import React from 'react'

const DetailsPriceCard = () => {
  return (
    <div className="border rounded-xl p-4 space-y-4">
      <p className="text-xl font-semibold">₦30,000<span className="text-sm font-normal text-muted-foreground">/month</span></p>
      <div className="text-sm space-y-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Available from</span>
          <span>July 23rd, 2025</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">To</span>
          <span>August 23rd, 2025</span>
        </div>
        <div className="text-xs text-muted-foreground italic">
          ✅ Prices include all fees
        </div>
      </div>
      <button className="bg-green-700 text-white w-full py-2 rounded-md hover:bg-green-800 transition">
        Book this room
      </button>
    </div>
  )
}

export default DetailsPriceCard