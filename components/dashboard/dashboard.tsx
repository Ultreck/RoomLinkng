import { SummaryCard } from "./SummaryCard";
import { BookingTable } from "./BookingTable";
import { MonthlyBookingsChart } from "./MonthlyBookingsChart";
import { MessageList } from "./MessageList";

export default function Dashboard() {
  return (
    <div className="flex">
      <main className="space-y-3 mx-auto w-full">
        <h2 className="text-2xl mt-10 font-semibold">Dashboard</h2>
        <p className="text-muted-foreground mb-4">
          List your rooms and receive bookings with ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SummaryCard
                title="Total Listings"
                value={10}
                description="2% increased from last month"
              />
              <SummaryCard
                title="Total Payouts"
                value="₦90k"
                description="15% increased from last month"
              />
              <SummaryCard
                title="Pending Listings"
                value={3}
                description="In review"
              />
            </div>
            <BookingTable />
          </div>
          <div className="flex flex-col gap-4">
            <MonthlyBookingsChart />
            <MessageList />
          </div>
        </div>
      </main>
    </div>
  );
}
