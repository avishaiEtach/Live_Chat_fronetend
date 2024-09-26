import React, { useState } from "react";
import { useSelectedConversationContext } from "../../../context/SelectedConversationContext";
import { messagesServices } from "../../../services/messages.services";
import toast from "react-hot-toast";

export const useChatInput = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } =
    useSelectedConversationContext();

  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    if (!message) {
      return;
    }
    await sendMessage(message);
    setMessage("");
  };

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = ev.target;
    setMessage(value);
  };

  const sendMessage = async (messageToSend: string) => {
    setLoading(true);
    try {
      const message = await messagesServices.sendMessage(
        messageToSend,
        selectedConversation?._id ?? ""
      );
      setMessages([...messages, message]);
    } catch (err: any) {
      toast.error(err.response.data);
    } finally {
      setLoading(false);
    }
  };
  return { handleSubmit, message, loading, handleChange };
};
