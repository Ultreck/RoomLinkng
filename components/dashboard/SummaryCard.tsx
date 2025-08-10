import { Card, CardContent } from "@/components/ui/card";

type SummaryCardProps = {
  title: string;
  value: string | number;
  description: string;
};

export function SummaryCard({ title, value, description }: SummaryCardProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="space-y-2">
        <h4 className="text-base text-gray-500 font-semibold">{title}</h4>
        <div className="text-[40px]  text-[#121212] font-medium">{value}</div>
        <p className="text-sm text-[#004A27] mt-1">{description}</p>
      </CardContent>
    </Card>
  );
}
