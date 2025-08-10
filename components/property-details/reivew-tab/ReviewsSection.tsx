

import RatingSummary from "./RatingSummary";
import CategoryRatings from "./CategoryRatings";
import ReviewItem from "./ReviewItem";

const reviews = [
  {
    name: "Samuel",
    location: "Lagos, Nigeria",
    date: "April 2025",
    rating: 4,
    review:
      "I stayed in Kevin’s Apartment during a transit , great value for money. Clean apartment with a functional and modern feel.",
  },
  {
    name: "Grace",
    location: "Ibadan, Nigeria",
    date: "January 2025",
    rating: 4,
    review:
      "I enjoyed my stay there, 24 hours electricity and a very responsive host",
  },
  // ... add more reviews here
];

export default function ReviewsSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-lg font-semibold mb-4">Reviews and Ratings</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <RatingSummary />
        <CategoryRatings />
      </div>

      <div className="flex flex-col gap-6">
        {reviews.map((r, idx) => (
          <ReviewItem key={idx} {...r} />
        ))}
      </div>
    </section>
  );
}

