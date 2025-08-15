import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import SmallerScreenTable from "./SmallerScreenTable";
import BiggerScreenTableRow from "./BiggerScreenTableRow";

type BookingStatus = "Confirmed" | "Completed" | "Cancelled";

export const bookings: {
  id: number;
  name: string;
  room: string;
  paid: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
}[] = [...Array(12)].map((_, i) => ({
  id: i + 1,
  name: i < 1 ? "Donna Gideon" : "Gift Eyo",
  room: "Lekki 2",
  paid: "₦80,000",
  date: "Jan 12, 2025 9:45am",
  checkIn: "Jan 13, 2025",
  checkOut: "Feb 13, 2025",
  status: i < 4 ? "Confirmed" : i < 8 ? "Completed" : "Cancelled",
}));
const BookingTable = ({ type = "All" }: { type: string }) => {
  return (
    <div>
      <ScrollArea className="h-[550px] mt-10 md:mt-5 w-full">
        <div className="text hidden md:block">
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
              {type === "Confirmed"
                ? bookings
                    .filter((item) => item.status === "Confirmed")
                    .map((booking) => (
                      <BiggerScreenTableRow key={booking.id} data={booking} />
                    ))
                : type === "Cancelled"
                ? bookings
                    .filter((item) => item.status === "Cancelled")
                    .map((booking) => (
                      <BiggerScreenTableRow key={booking.id} data={booking} />
                    ))
                : type === "Completed"
                ? bookings
                    .filter((item) => item.status === "Completed")
                    .map((booking) => (
                      <BiggerScreenTableRow key={booking.id} data={booking} />
                    ))
                : bookings.map((booking) => (
                    <BiggerScreenTableRow key={booking.id} data={booking} />
                  ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden w-full space-y-4 px-3 mt-5 ">
          {type === "Confirmed"
            ? bookings
                .filter((item) => item.status === "Confirmed")
                .map((item) => (
                  <div key={item.id} className="text">
                    <SmallerScreenTable data={item} />
                  </div>
                ))
            : type === "Completed"
            ? bookings
                .filter((item) => item.status === "Completed")
                .map((item) => (
                  <div key={item.id} className="text">
                    <SmallerScreenTable data={item} />
                  </div>
                ))
            : type === "Cancelled"
            ? bookings
                .filter((item) => item.status === "Cancelled")
                .map((item) => (
                  <div key={item.id} className="text">
                    <SmallerScreenTable data={item} />
                  </div>
                ))
            : bookings.map((item) => (
                <div key={item.id} className="text">
                  <SmallerScreenTable data={item} />
                </div>
              ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default BookingTable;
