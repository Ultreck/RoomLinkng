type Category = {
  label: string;
  score: number;
};

const categories: Category[] = [
  { label: "Cleanliness", score: 5.0 },
  { label: "Communications", score: 5.0 },
  { label: "Check in", score: 5.0 },
  { label: "Accuracy", score: 4.8 },
  { label: "Location", score: 4.6 },
];

export default function CategoryRatings() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      {categories.map(({ label, score }) => (
        <div key={label} className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground w-32">{label}</span>
          <div className="flex-1 bg-muted h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-500"
              style={{ width: `${(score / 5) * 100}%` }}
            />
          </div>
          <span className="text-sm font-medium w-8">{score.toFixed(1)}</span>
        </div>
      ))}
    </div>
  );
}
