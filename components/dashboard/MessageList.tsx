import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import img from "../../assets/images/profile.png";

const messages = new Array(6).fill({
  name: "Donna Gideon",
  message: "The keys are with the new...",
  avatar: img,
  unread: 2
});

export function MessageList() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm h-full">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-semibold">Messages</h4>
        <span className="text-xs text-muted-foreground">7</span>
      </div>
      <ScrollArea className="h-[350px]">
        {messages.map((msg, i) => (
          <div key={i} className="flex gap-2 items-center py-2 border-b pr-5">
            <Image
              src={msg?.avatar}
              alt="avatar"
              width={30}
              height={30}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">{msg?.name}</p>
              <p className="text-xs text-muted-foreground truncate">
                {msg?.message}
              </p>
            </div>
            <span className="text-xs w-4 h-4 bg-green-600 text-white rounded-full flex justify-center items-center">{msg?.unread}</span>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
