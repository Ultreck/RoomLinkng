import ChatMainPage from "@/components/chats/ChatMainPage";
import TopNav from "@/components/layout/TopNav";
import React, { Suspense } from "react";

const MessagePage = () => {
  return (
    <Suspense fallback={null}>
      <TopNav/>
      <ChatMainPage />
    </Suspense>
  );
};

export default MessagePage;
