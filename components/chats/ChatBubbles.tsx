import React from "react";
import img from "../../assets/images/profile.png";
import Image from "next/image";
import { ChatBubblesProp } from "@/types/prop-types";

const ChatBubbles = ({ data }: ChatBubblesProp) => {
  return (
    <>
      {data.me && (
        <div className="flex justify-end relative">
          <div className="bg-[#00A859] text-white min-w-72 p-3 rounded-xl max-w-md mr-10">
            <p>{data.me}</p>
            <p className="text-xs text-right mt-1">{data.time}</p>
          </div>
          <Image
            src={img}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full absolute"
          />
        </div>
      )}
      {data.user && (
        <div className="flex  relative">
          <Image
            src={img}
            width={40}
            height={40}
            className="mr-2 absolute rounded-full"
            alt="user"
          />
          <div className="bg-white min-w-72 ml-11 p-3 rounded-xl border max-w-md">
            <p className="text-sm text-gray-800">{data.user}</p>
            <p className="text-xs text-right text-gray-400 mt-1">{data.time}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubbles;
