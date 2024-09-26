import React from "react";
import { SelfMessage } from "../SelfMessage/SelfMessage";
import { OtherMessage } from "../OtherMessage/OtherMessage";
import { ChatInput } from "../ChatInput/ChatInput";
import { useSelectedConversationContext } from "../../context/SelectedConversationContext";
import { NoChatSelected } from "../NoChatSelected/NoChatSelected";
import { useAuthContext } from "../../context/AuthContext";
import { useChat } from "./hooks/useChat";
import "./Chat.scss";

export const Chat = () => {
  const { selectedConversation, messages } = useSelectedConversationContext();
  const { authUser } = useAuthContext();
  const { messagesEndRef } = useChat();

  if (!selectedConversation) {
    return (
      <div className="chat-main-container">
        <NoChatSelected />
      </div>
    );
  }

  return (
    <div className="chat-main-container">
      {/* Header */}
      <div className="chat-header-container">
        <span className="label-text">To: </span>
        <span className="text-gray-900 font-bold">
          {selectedConversation.username}
        </span>
      </div>
      <div className="chat-messages-container">
        {messages.map((message: any, index: number) => {
          return (
            <div ref={messagesEndRef}>
              {message.senderId === authUser?._id ? (
                <SelfMessage message={message} key={index} />
              ) : (
                <OtherMessage message={message} key={index} />
              )}
            </div>
          );
        })}
      </div>
      <ChatInput />
    </div>
  );
};
