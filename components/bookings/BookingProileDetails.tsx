"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img from "../../assets/images/profile.png";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Card } from "../ui/card";


type BookingStatus = "Confirmed" | "Completed" | "Cancelled";
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
  children: React.ReactNode;
};
const BookingProileDetails = ({ children, data }: TableProps) => {

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-xs rounded-3xl p-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>User Profile - Gladys Adediji</DialogTitle>
        </VisuallyHidden>
        <div className="flex flex-col items-center bg-gradient-to-b from-[#9AFFD0EB] to-[#FFFFFF] p-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src={img}
              alt="User avatar"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <h3 className="mt-3 text-lg font-semibold">{data.name}</h3>
          <p className="text-sm text-gray-500">Renter</p>
        </div>

        <Card className="px-6 py-4 gap-3 w-4/5 lg:w-2/3 mx-auto">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Joined in</span>
            <span className="font-medium">2025</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">All time bookings</span>
            <span className="font-medium">8</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Most booked location</span>
            <span className="font-medium">Abuja</span>
          </div>
        </Card>

        {/* Footer with button */}
        <div className="pt-0 w-4/5  lg:w-2/3 my-6 mx-auto">
          <Button className="w-full py-6 bg-[#474747] hover:bg-[#3d3d3d] cursor-pointer text-white rounded-full">
            Send a message
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingProileDetails;
