import React from 'react'

const DetailsCalendar = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-4 mt-2">
        <div className="flex items-center space-x-1 text-sm">
          <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
          <span>Available days</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <span className="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
          <span>Booked days</span>
        </div>
      </div>
    </div>
  )
}

export default DetailsCalendar