import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "../ui/card";
import Image from "next/image";
import img from "../../assets/images/profile.png";

type BookingStatus = "Confirmed" | "Completed" | "Cancelled";

const statusColors: Record<BookingStatus, string> = {
  Confirmed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
  Completed: "bg-yellow-100 text-yellow-800",
};

const bookings: {
  name: string;
  room: string;
  paid: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
}[] = [...Array(8)].map((_, i) => ({
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
      <ScrollArea className="h-[450px]">
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
              <th className="py-3 px-2 rounded-tr-lg rounded-br-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr
                key={i}
                className="hover:bg-gray-100 transition-colors duration-150"
              >
                <td className="py-3 lg:px-2 px-1 text-xs flex items-center space-x-2">
                <Image src={img} alt="data image" width={30} height={30} className="rounded-full mr-1" />
                  {booking.name}</td>
                <td className="py-3 lg:px-2 px-1 text-xs">{booking.room}</td>
                <td className="py-3 lg:px-2 px-1 text-xs">{booking.paid}</td>
                <td className="py-3 lg:px-2 px-1 text-xs">{booking.date}</td>
                <td className="py-3 lg:px-2 px-1 text-xs">{booking.checkIn}</td>
                <td className="py-3 lg:px-2 px-1 text-xs">{booking.checkOut}</td>
                <td className="py-3 lg:px-2 px-1 text-xs">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      statusColors[booking.status]
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea>
    </Card>
  );
}
