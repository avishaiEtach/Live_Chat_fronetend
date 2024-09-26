import React, { useEffect, useRef } from "react";
import { messagesServices } from "../../../services/messages.services";
import { useListenMessages } from "../../../hooks/useListenMessages";
import { useSelectedConversationContext } from "../../../context/SelectedConversationContext";

export const useChat = () => {
  const { selectedConversation, setMessages, messages } =
    useSelectedConversationContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useListenMessages();

  useEffect(() => {
    if (selectedConversation) {
      getMessages(selectedConversation._id);
    }
  }, [selectedConversation]);

  const getMessages = async (id: string) => {
    const messages = await messagesServices.getMessages(id);
    setMessages(messages);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return { messagesEndRef };
};
