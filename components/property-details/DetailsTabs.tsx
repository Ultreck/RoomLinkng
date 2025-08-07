import React from 'react'

const DetailsTabs = () => {
  return (
    <div className="flex space-x-3 text-sm">
      <button className="text-muted-foreground hover:text-black">Overview</button>
      <button className="font-medium border-b-2 border-black">Calendar</button>
      <button className="text-muted-foreground hover:text-black">Reviews</button>
    </div>
  )
}

export default DetailsTabs