import Image from "next/image";
import { Star } from "lucide-react";
import img from "../../../assets/images/profile.png";
type ReviewProps = {
  name: string;
  location: string;
  date: string;
  rating: number;
  review: string;
};

export default function ReviewItem({
  name,
  location,
  date,
  rating,
  review,
}: ReviewProps) {
  return (
    <div className="flex relative gap-3">
      <Image
        src={img}
        alt={name}
        // width={50}
        // height={50}
        className="rounded-full w-16 h-16"
      />
      <div className="">
        <p className="font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">{location}</p>
        <div className="flex items-center gap-1 mt-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < rating ? "fill-yellow-500" : ""}`}
            />
          ))}
          <span className="text-xs text-muted-foreground">· {date}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{review}</p>
      </div>
    </div>
  );
}
