"use client";

import Image from "next/image";
import img from "../../assets/images/profile.png";
import { Card } from "../ui/card";
import { userDetails } from "@/app/api/user";
export default function UserProfilePanel() {
  return (
    <div className="hidden md:block min-h-[80vh] w-full px-6 py-6">
      <div className="flex flex-col items-center mt-4">
        <Image
          src={img}
          alt="user"
          width={80}
          height={80}
          className="rounded-full"
        />
        <h3 className="mt-2 font-semibold text-lg">{userDetails?.name}</h3>
        <span className="text-sm text-gray-500">{userDetails?.role}</span>
      </div>

      <div className="mt-6 text-center flex space-x-5">
        <Card className="text-sm border gap-0 w-[90px] h-[90px] ">
          <div className="text-lg font-semibold">{userDetails?.review}</div>
          <div className="text-gray-500">Reviews</div>
        </Card>
        <Card className="text-sm w-[90px] gap-0 h-[90px]">
          <div className="text-lg font-semibold">{userDetails?.rating} <span className="text-sm">⭐</span> </div>
          <div className="text-gray-500">Rating</div>
        </Card>
      </div>

      <div className="mt-6 text-sm space-y-1 text-gray-600">
        <h1 className="text font-semibold">Details</h1>
        <p className="flex justify-between">
          Rooms Listed:
          <span className="font-semibold">{userDetails?.details?.rooms}</span>{" "}
        </p>
        <p className="flex justify-between">
          Properties Listed:
          <span className="font-semibold">
            {userDetails?.details?.properties}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
