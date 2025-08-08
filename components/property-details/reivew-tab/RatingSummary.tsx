import { Star } from "lucide-react";

export default function RatingSummary() {
  return (
    <div className="flex items-start gap-4">
      <div>
        <p className="text-4xl font-bold">4.8</p>
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-500" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-1">(12 reviews)</p>
      </div>
    </div>
  );
}