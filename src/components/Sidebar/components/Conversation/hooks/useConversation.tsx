import React from "react";
import { useSelectedConversationContext } from "../../../../../context/SelectedConversationContext";
import { useSocketContext } from "../../../../../context/SocketContext";

export const useConversation = ({ conversation }: ConversationProps) => {
  const { setSelectedConversation, selectedConversation } =
    useSelectedConversationContext();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  const onClickConversation = () => {
    setSelectedConversation(conversation);
  };

  return { onClickConversation, isSelected, isOnline };
};
