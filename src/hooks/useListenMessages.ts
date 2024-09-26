import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useSelectedConversationContext } from "../context/SelectedConversationContext";
import notificationSound from "../assets/sounds/livechat-129007.mp3";

export const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useSelectedConversationContext();
  useEffect(() => {
    socket?.on("newMessage", (newMessage: any) => {
      const sound = new Audio(notificationSound);
      sound.play();

      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
