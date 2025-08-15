import Image from "next/image";
import React from "react";
import img from "../../assets/images/profile.png";
import BookingProileDetails from "./BookingProileDetails";

type BookingStatus = "Confirmed" | "Completed" | "Cancelled";

const statusColors: Record<BookingStatus, string> = {
  Confirmed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
  Completed: "bg-yellow-100 text-yellow-800",
};

type TableProps = {
  data: {
    id: number;
    name: string;
    room: string;
    paid: string;
    date: string;
    checkIn: string;
    checkOut: string;
    status: BookingStatus;
  };
};
const SmallerScreenTable = ({ data }: TableProps) => {
  return (
    <BookingProileDetails data={data}>
      <div
        key={data.id}
        className="bg-white rounded-lg  border border-gray-300 pl-4"
      >
        <div className="flex justify-between pr-4 py-7 items-center border-b h-[40px]">
          <span className="text-[#252C32] text-[16px]">Renter&apos;s name</span>
          <span className="font-semibold flex items-center">
            <Image
              src={img}
              alt="data image"
              width={30}
              height={30}
              className="rounded-full mr-1"
            />
            {data.name}
          </span>
        </div>
        <div className="flex justify-between pr-4 py-5 items-center border-b h-[40px]">
          <span className="text-[#252C32] text-[16px]">Room booked</span>
          <span>{data.room}</span>
        </div>
        <div className="flex justify-between pr-4 py-5 items-center border-b h-[40px]">
          <span className="text-[#252C32] text-[16px]">Amount paid</span>
          <span>{data.paid}</span>
        </div>
        <div className="flex justify-between pr-4 py-5 items-center border-b h-[40px]">
          <span className="text-[#252C32] text-[16px]">Date</span>
          <span>{data.date}</span>
        </div>
        <div className="flex justify-between pr-4 py-5 items-center border-b h-[40px]">
          <span className="text-[#252C32] text-[16px]">Check in</span>
          <span>{data.checkIn}</span>
        </div>
        <div className="flex justify-between pr-4 py-5 items-center border-b h-[40px]">
          <span className="text-[#252C32] text-[16px]">Check out</span>
          <span>{data.checkOut}</span>
        </div>
        <div className="flex justify-between pr-4 py-5 items-center border-b h-[40px]">
          <span className="text-[#252C32] text-[16px]">Status</span>
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              statusColors[data.status]
            }`}
          >
            {data.status}
          </span>
        </div>
      </div>
    </BookingProileDetails>
  );
};

export default SmallerScreenTable;
