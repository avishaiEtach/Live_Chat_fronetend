import React from "react";
import { Avatar, Badge, Divider } from "@mui/material";
import { useConversation } from "./hooks/useConversation";
import "./Conversation.scss";

export const Conversation = ({ conversation }: ConversationProps) => {
  const { onClickConversation, isSelected, isOnline } = useConversation({
    conversation,
  });
  return (
    <div className="conversation-main-container" onClick={onClickConversation}>
      <div className={`conversation-container ${isSelected ? "selected" : ""}`}>
        <div className="conversation-avatar">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            variant="dot"
            invisible={!isOnline}
          >
            <Avatar alt="user.png" src={conversation.profilePic} />
          </Badge>
        </div>

        <div className="conversation-text-main-container">
          <div className="conversation-text-container">
            <p className="conversation-username">{conversation.username}</p>
          </div>
        </div>
      </div>
      <Divider
        className="conversation-divider"
        variant="middle"
        component="div"
      />
    </div>
  );
};
