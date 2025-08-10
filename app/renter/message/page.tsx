import ChatMainPage from "@/components/chats/ChatMainPage";
import { Suspense } from "react";

export default function MessagesPage() {
  return (
    <Suspense fallback={null}>
      <ChatMainPage />
    </Suspense>
  );
}
