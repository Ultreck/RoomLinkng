

export type ChatPreviewProp = {
  me: string;
  user: string;
  time: string;
}

export type ChatUersProps = {
  name: string;
  time: string;
  preview?: ChatPreviewProp[];
  isTyping?: boolean;
  unread: number
}


export type ChatBubblesProp = {
    data: ChatPreviewProp;
    // type:string;
}