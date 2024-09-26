import React from "react";
import { TiMessages } from "react-icons/ti";
import "./NoChatSelected.scss";
import { useAuthContext } from "../../context/AuthContext";

export const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="no-chat-selected-main-container">
      <div className="no-chat-selected-text-box">
        <div>
          <span>Welcome </span>
          <span className="no-chat-selected-text-box-header">
            {authUser?.username ?? ""}
          </span>
        </div>
        <p>Select a chat to start messaging</p>
        <TiMessages className="no-chat-selected-text-box-icon" />
      </div>
    </div>
  );
};
