"use client";

import ChatWindow from "@/components/chats/ChatWindow";
import ChatWindowHeader from "@/components/chats/ChatWindowHeader";
import MessagesSidebar from "@/components/chats/MessagesSidebar";
import UserProfilePanel from "@/components/chats/UserProfilePanel";
import useParamHook from "@/hooks/use-param-hook";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useState, useEffect } from "react";
import { ChatUersProps } from "@/types/prop-types";
import { slideVariants, users } from "@/lib/helper";

const ChatMainPage = () => {
  const [isAbout, setIsAbout] = useState<boolean>(false);
  const { mode } = useParamHook({ key: "chatId" });
  const [user, setUser] = useState<ChatUersProps>();
  useEffect(() => {
    setUser(users.find((value) => value.id === mode));
  }, [mode]);
  console.log(isAbout);

  return (
    <div className="flex max-h-[89vh] overflow-hidden">
      <div className="text w-1/4">
        <Suspense>
          <MessagesSidebar />
        </Suspense>
      </div>
      <div className="text  w-3/4 ">
        <ChatWindowHeader
          name={user?.name}
          isAbout={isAbout}
          setIsAbout={setIsAbout}
        />
        <div className="text w-full flex">
          <div className={`${!isAbout ? "w-full" : "w-4/5"}`}>
            <ChatWindow user={user} />
          </div>
          {isAbout && (
            <div className={` ${isAbout ? "1/5" : ""}`}>
              <AnimatePresence custom={"1"} mode="wait">
                <motion.div
                  key={"about"}
                  custom={"1"}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <UserProfilePanel />
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMainPage;
