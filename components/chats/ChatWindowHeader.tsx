import Image from "next/image";
import React from "react";
import img from "../../assets/images/profile.png";
import { ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { slideVariants } from "@/lib/helper";

type UserName = {
  name?: string;
  isAbout: boolean;
  setIsAbout: React.Dispatch<React.SetStateAction<boolean>>;
};
const ChatWindowHeader = ({ name, setIsAbout, isAbout }: UserName) => {
  return (
    <div className="border-b w-full flex items-center justify-between pr-3">
      <div
        onClick={() => setIsAbout((prev) => !prev)}
        className="flex bg-white space-x-3 z-20 cursor-pointer items-center px-8 py-4 border-b"
      >
        <Image
          src={img}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-green-500 text-sm">Typing...</span>
        </div>
      </div>
      {isAbout && (
        <AnimatePresence custom={"1"} mode="wait">
          <motion.div
            key={"about"}
            custom={"1"}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="text w-60 flex px-1 items-center">
              <ChevronLeft />
              <span className="text ml-5 font-semibold">About</span>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default ChatWindowHeader;
