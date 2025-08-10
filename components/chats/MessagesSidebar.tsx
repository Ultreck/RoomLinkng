"use client";
import { Input } from "@/components/ui/input";
import { users } from "@/lib/helper";
import Image from "next/image";
import img from "../../assets/images/profile.png";
import { ScrollArea } from "../ui/scroll-area";
import { Search } from 'lucide-react';
import useParamHook from "@/hooks/use-param-hook";

export default function MessagesSidebar() {
  const { handleSearchParams, mode} = useParamHook({key: "chatId"});

console.log(mode);

  return (
    <aside className="w-full  h-full border-r px-5 py-6 space-y-4">
      <h2 className="text-xl font-semibold mb-5">Messages</h2>
      <div className="text flex border items-center h-14 space-x-1 pl-3 pr-1 rounded-[20px] bg-gray-100">
         <Search />
      <Input placeholder="Search messages" className=" h-full px-4  border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 outline-0" />
      </div>
      <ScrollArea className="h-screen w-[350px] rounded-md border-0 pb-40">
        <div className="mt-4">
          {users.map((user, i) => (
            <div key={i} onClick={() =>handleSearchParams(`${user?.id}`, 'chatId')} className={`flex px-5 py-2 ${user.id === mode? "bg-gray-100" : ""} items-center rounded-lg hover:bg-gray-50 cursor-pointer gap-3`}>
              <Image
                src={img}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1 pb-3">
                <div className="flex justify-between">
                  <span className="font-semibold">{user.name}</span>
                  <span className="text-sm text-[#474747]">{user.time}</span>
                </div>
                <p className="text-sm flex justify-between text-[#474747] truncate">
                  {user?.isTyping ? (
                    <em className="text-[#00A859]">Typing...</em>
                  ) : (
                    <span className="text">
                      {user.preview &&
                        (user?.preview[0]?.user || user?.preview[0]?.me)}
                    </span>
                  )}
                  {user?.unread > 0 &&
                  <span className="text-sm w-3 h-3 bg-[#00A859] text-white p-3 font-semibold rounded-full flex justify-center items-center">{user.unread}</span>
                }
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}
