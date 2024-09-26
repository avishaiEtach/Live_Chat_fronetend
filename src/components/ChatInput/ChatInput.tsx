import React from "react";
import { BsSend } from "react-icons/bs";
import LoadingButton from "@mui/lab/LoadingButton";
import { useChatInput } from "./hooks/useChatInput";
import "./ChatInput.scss";

export const ChatInput = () => {
  const { handleSubmit, message, loading, handleChange } = useChatInput();
  return (
    <form className="chat-input-main-container" onSubmit={handleSubmit}>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input-input"
          placeholder="Enter your text..."
          value={message}
          onChange={handleChange}
        />

        <LoadingButton
          loading={loading}
          type="submit"
          className="chat-input-button"
        >
          <BsSend />
        </LoadingButton>
      </div>
    </form>
  );
};
