import React from 'react'
import OverviewDescription from '../overview-tab/OverviewDescription'
import OverviewAmenities from '../overview-tab/OverviewAmenities'
import OverviewPower from '../overview-tab/OverviewPower'
import RulesCard from './RulesCard'
import ReviewsAndRatingCard from './ReviewsAndRatingCard'


const OverviewMain = () => {
  return (
    <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 md:space-x-5 px-4 md:py-8 py-4">
      <div className="text md:col-span-2">
        <OverviewDescription text="Is there another way i can pass to the house because i don't know again o. Is there another way i can pass to the house because i don't know again o. Is there another way i can pass to the house because i don't know again o. Is there another way i can pass to the house because i don't know again o."/>

        <OverviewAmenities/>
        <OverviewPower/>
      </div>
      <div className="text mt-5 md:-mt-16 space-y-2">
        <RulesCard/>
        <ReviewsAndRatingCard/>
      </div>
    </div>
  )
}

export default OverviewMain