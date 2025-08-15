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

const BiggerScreenTableRow = ({ data }: TableProps) => {
  return (
    <BookingProileDetails data={data}>
      <tr
        key={data.id}
        className="hover:bg-gray-100 cursor-pointer transition-colors duration-150"
      >
        <td className="py-3 lg:px-2 px-1 text-xs flex items-center space-x-2">
          <Image
            src={img}
            alt="data image"
            width={30}
            height={30}
            className="rounded-full mr-1"
          />
          {data.name}
        </td>
        <td className="py-3 lg:px-2 px-1 text-xs">{data.room}</td>
        <td className="py-3 lg:px-2 px-1 text-xs">{data.paid}</td>
        <td className="py-3 lg:px-2 px-1 text-xs">{data.date}</td>
        <td className="py-3 lg:px-2 px-1 text-xs">{data.checkIn}</td>
        <td className="py-3 lg:px-2 px-1 text-xs">{data.checkOut}</td>
        <td className="py-3 lg:px-2 px-1 text-xs">
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              statusColors[data.status]
            }`}
          >
            {data.status}
          </span>
        </td>
      </tr>
    </BookingProileDetails>
  );
};

export default BiggerScreenTableRow;
