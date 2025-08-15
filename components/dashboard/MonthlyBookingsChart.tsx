"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card } from "../ui/card";

const data = [
  { month: "March", bookings: 16 },
  { month: "April", bookings: 24 },
  { month: "May", bookings: 10 },
];
const barColors = ["#000000", "#E48C15", "#00A859"];

export function MonthlyBookingsChart() {
  return (
    <Card className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="text-sm font-medium mb-2">Monthly Bookings</h4>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barCategoryGap={3} barGap={0}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="bookings" radius={[10, 10, 0, 0]}>
            {data.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={barColors[index % barColors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
