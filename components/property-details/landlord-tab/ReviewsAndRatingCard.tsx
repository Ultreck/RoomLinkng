import React from "react";
import { MapPin } from "lucide-react";

const ratings = [
  {value: "5.0", label: "Cleanliness", width: "100"},
  {value: "4.8", label: "Communications", width: "96"},
  {value: "4.8", label: "Check in", width: "96"},
  {value: "4.8", label: "Accuracy", width: "96"},
  {value: "4.8", label: "Location", width: "96"},
];
const ReviewsAndRatingCard = () => {
  return (
    <div className=" border rounded-lg p-5">
      <h3 className="font-medium text-[#474747]">Reviews and Ratings</h3>
      <div className="space-y-1">
        <div className="flex items-center">
          <span className="text-sm mr-2 text-[#898989] flex items-center gap-1"><MapPin className="w-3 h-3 text-muted-foreground" />
          <span className="text-[#474747] font-bold">4.8</span> (12 reviews)</span>
        </div>
        {ratings.map((rate, index) =>(
        <div key={index} className="flex items-center">
          <span className="text-sm mr-2 text-[#898989]">{rate?.label}</span>
          <div className="flex-1 h-2 bg-gray-200 rounded">
            <div className="h-2 bg-yellow-400" style={{ width: `${rate.width}%` }}></div>
          </div>
          <span className="text-sm ml-2">{rate?.value}</span>
        </div>

        ))}
      </div>
    </div>
  );
};

export default ReviewsAndRatingCard;
