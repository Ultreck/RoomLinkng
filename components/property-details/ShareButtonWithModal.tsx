"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy} from "lucide-react";
import {
  FaTwitter,
  FaReddit,
  FaTelegram,
  FaEnvelope,
  FaFacebook,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";
import { BsShare } from "react-icons/bs";

export default function ShareButtonWithModal() {
  const [copied, setCopied] = useState(false);
  const roomLink = "https://www.roomlink.com/rooms/tropicflatvilla";

  const handleCopy = () => {
    navigator.clipboard.writeText(roomLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const shareOptions = [
    { label: "Twitter", icon: <FaTwitter size={20} /> },
    { label: "Reddit", icon: <FaReddit size={20} /> },
    { label: "Telegram", icon: <FaTelegram size={20} /> },
    { label: "Email", icon: <FaEnvelope size={20} /> },
    { label: "Facebook", icon: <FaFacebook size={20} /> },
    { label: "Messages", icon: <span className="text-lg">💬</span> },
    { label: "WhatsApp", icon: <FaWhatsapp size={20} /> },
    { label: "Messenger", icon: <FaFacebookMessenger size={20} /> },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex cursor-pointer items-center bg-[#F6F6F6] hover:bg-gray-200 rounded-full w-32">
          <BsShare />
          Share
        </Button>
      </DialogTrigger>

      <DialogContent className="rounded-2xl px-0 max-w-sm w-xs">
        <DialogHeader className="flex items-center justify-between mb-4">
          <DialogTitle className="text-lg font-semibold">
            Share Room
          </DialogTitle>
        </DialogHeader>

        {/* Share Options Grid */}
        <div className="grid grid-cols-4 px-6 gap-4 mb-6">
          {shareOptions.map((opt) => (
            <button
              key={opt.label}
              className="flex flex-col items-center gap-1"
            >
              <div className="flex hover:bg-gray-200 cursor-pointer items-center justify-center w-12 h-12 rounded-full bg-muted">
                {opt.icon}
              </div>
              <span className="text-xs text-center">{opt.label}</span>
            </button>
          ))}
        </div>

        {/* Room Link */}
        <div className=" gap-2 border-t px-3 py-2">
          <h1 className="text-lg font-semibold">Room Link</h1>
          <div className="text bg-gray-100 mt-3 flex items-center px-3 py-1 rounded-lg">
            <input
              readOnly
              value={roomLink}
              className="flex-1 bg-transparent  text-sm outline-none"
            />
            <button
              onClick={handleCopy}
              className="p-2 cursor-pointer hover:bg-gray-200 rounded"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        {copied && <p className="text-xs text-green-600 mt-2">Link copied!</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
}
