import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "../ui/card";
import BiggerScreenTableRow from "../bookings/BiggerScreenTableRow";
import SmallerScreenTable from "../bookings/SmallerScreenTable";

type BookingStatus = "Confirmed" | "Completed" | "Cancelled";

const bookings: {
  id: number;
  name: string;
  room: string;
  paid: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
}[] = [...Array(8)].map((_, i) => ({
  id: i + 1,
  name: i < 1 ? "Donna Gideon" : "Gift Eyo",
  room: "Lekki 2",
  paid: "₦80,000",
  date: "Jan 12, 2025 9:45am",
  checkIn: "Jan 13, 2025",
  checkOut: "Feb 13, 2025",
  status: i < 3 ? "Confirmed" : i < 5 ? "Completed" : "Cancelled",
}));

export function BookingTable() {
  return (
    <Card className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h4 className="text-md text-[#474747] font-semibold">
          Booking History
        </h4>
        <Select>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Today" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Today",
              "This week",
              "Last week",
              "This Month",
              "Last month",
              "This year",
              "Last year",
            ].map((time) => (
              <SelectItem className="" key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="h-[460px]">
        <div className="text hidden xl:block">
          <table className="w-full text-sm text-left">
            <thead className="text-muted-foreground rounded-lg py-4">
              <tr className="bg-[#F5F5F5] rounded-lg py-3">
                <th className="py-3 px-2 rounded-tl-lg rounded-bl-lg">
                  Renter&apos;s name
                </th>
                <th className="py-3 px-2">Room booked</th>
                <th className="py-3 px-2">Amount paid</th>
                <th className="py-3 px-2">Date</th>
                <th className="py-3 px-2">Check in</th>
                <th className="py-3 px-2">Check out</th>
                <th className="py-3 px-2 rounded-tr-lg rounded-br-lg">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <BiggerScreenTableRow key={booking?.id} data={booking} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="xl:hidden w-full space-y-4 mt-5 ">
          {bookings.map((booking) => (
            <SmallerScreenTable key={booking?.id} data={booking} />
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
