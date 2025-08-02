import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Paperclip, Smile, SendHorizonal } from "lucide-react";
import img from "../../assets/images/profile.png";
import { ScrollArea } from "../ui/scroll-area";
import bgImg from "../../assets/images/chat-bg.png";
import ChatBubbles from "./ChatBubbles";
import { ChatUersProps } from "@/types/prop-types";


type ChatWindowProp = {
    user?: ChatUersProps;
}
export default function ChatWindow({user}: ChatWindowProp) {
  

  let isTyping = true;
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="mx-h-[89vh] w-full relative flex flex-col justify-between"
    >
      <div className="w-full">
        <ScrollArea className="h-[78vh] w-full">
          {/* Warning */}
          <div className="bg-[#FFEBBD] text-yellow-800 mt-2 text-xs px-4 py-3 text-center">
            Communication outside this platform is not advised. We won’t be
            responsible for any scam that takes place.
          </div>

          {/* Chat Messages */}
          <div className="p-6 space-y-6 h-[calc(100vh-240px)] overflow-y-auto bg-[url('/chat-pattern.png')] bg-repeat">
            {user?.preview?.map((item, index) => (
              <div className="text" key={index}>
                <ChatBubbles data={item} />
              </div>
            ))}
            {isTyping && (
              <div className="flex  relative">
                <Image
                  src={img}
                  width={40}
                  height={40}
                  className="mr-2 absolute rounded-full"
                  alt="user"
                />
                <div className="bg-white min-w-40 ml-11 p-3 rounded-xl border max-w-md">
                  <div className="bg-white rounded-xl px-4 py-2 inline-block text-gray-500 w-fit">
                    <div className="flex space-x-2 items-center">
                      <div
                        className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="relative bg-gray-200  mb-16 text-black rounded-lg p-3 max-w-xs">
              <p>This is the reply</p>
              <div className="absolute -bottom-2 left-3">
              <svg
              viewBox="0 0 20 20"
              className="w-4 h-4 fill-gray-200 -rotate-90"
              >
              <path d="M0,10 C5,0 15,0 20,10 C15,20 5,20 0,10 Z" />
              </svg>
              </div>
              </div> */}
          </div>
        </ScrollArea>
      </div>

      {/* Input Field */}
      <div className="text w-full absolute bottom-5">
        <div className="flex rounded-full mx-auto w-[95%] items-center  bg-white  gap-2 p-4 border-t">
          <Input
            placeholder="Type your messages"
            className=" h-full px-4  border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 outline-0"
          />
          <Smile size={20} />
          <Paperclip size={20} />
          <button className="bg-yellow-500 p-2 rounded-full text-white">
            <SendHorizonal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
