import React from "react";
import { Conversation } from "../Conversation/Conversation";
import "./Conversations.scss";

export const Conversations = ({ conversations }: ConversationsProps) => {
  return (
    <div className="conversations-container">
      {conversations.map((conversation, index) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}
    </div>
  );
};
