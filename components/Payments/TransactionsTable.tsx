"use client";

import { ScrollArea } from "../ui/scroll-area";
import PaymentsBiggerScreenTableRow from "./PaymentsBiggerScreenTableRow";
import PaymentSmallerScreenTable from "./PaymentSmallerScreenTable";
type BookingStatus = "Successful" | "In progress" | "Cancelled";

export const paymentData: {
  id: number;
  transactionId: string;
  recipient: string;
  amount: string;
  date: string;
  status: BookingStatus;
}[] = [...Array(8)].map((_, i) => ({
  id: i + 1,
  transactionId: "ID *******7804",
  recipient: "Donna Gideon",
  amount: "₦80,000",
  date: "Jan 12, 2025 9:45am",
  status: i < 3 ? "Successful" : i < 5 ? "In progress" : "Cancelled",
}));

export default function TransactionsTable({ type = "All" }: { type: string }) {
  return (
    <ScrollArea className="h-[550px] mt-10 md:mt-5 w-full">
      <div className="text hidden md:block">
        <table className="w-full text-sm text-left">
          <thead className="text-muted-foreground rounded-lg py-4">
            <tr className="bg-[#F5F5F5] rounded-lg py-3">
              <th className="py-3 px-2 rounded-tl-lg rounded-bl-lg">
                Transaction ID
              </th>
              <th className="py-3 px-2">Recipient name</th>
              <th className="py-3 px-2">Amount paid</th>
              <th className="py-3 px-2">Date</th>
              <th className="py-3 px-2 rounded-tr-lg rounded-br-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            {type === "Successful"
              ? paymentData.filter(
                  (item) => item.status === "Successful"
                ).map((booking) => (
                  <PaymentsBiggerScreenTableRow
                    key={booking.id}
                    data={booking}
                  />
                ))
              : type === "Cancelled"
              ? paymentData.filter(
                  (item) => item.status === "Cancelled"
                ).map((booking) => (
                  <PaymentsBiggerScreenTableRow
                    key={booking.id}
                    data={booking}
                  />
                ))
              : type === "In progress"
              ? paymentData.filter(
                  (item) => item.status === "In progress"
                ).map((booking) => (
                  <PaymentsBiggerScreenTableRow
                    key={booking.id}
                    data={booking}
                  />
                ))
              : paymentData.map((booking) => (
                  <PaymentsBiggerScreenTableRow
                    key={booking.id}
                    data={booking}
                  />
                ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden w-full space-y-4 px-3 mt-5 ">
        {type === "Successful"
          ? paymentData.filter((item) => item.status === "Successful").map(
              (item) => (
                <div key={item.id} className="text">
                  <PaymentSmallerScreenTable data={item} />
                </div>
              )
            )
          : type === "In progress"
          ? paymentData.filter((item) => item.status === "In progress").map(
              (item) => (
                <div key={item.id} className="text">
                  <PaymentSmallerScreenTable data={item} />
                </div>
              )
            )
          : type === "Cancelled"
          ? paymentData.filter((item) => item.status === "Cancelled").map(
              (item) => (
                <div key={item.id} className="text">
                  <PaymentSmallerScreenTable data={item} />
                </div>
              )
            )
          : paymentData.map((item) => (
              <div key={item.id} className="text">
                <PaymentSmallerScreenTable data={item} />
              </div>
            ))}
      </div>
    </ScrollArea>
  );
}
