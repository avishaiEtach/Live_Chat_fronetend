import React from "react";
import { Divider, IconButton } from "@mui/material";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { Conversations } from "./components/Conversations/Conversations";
import { BiLogOut } from "react-icons/bi";
import { useSidebar } from "./hooks/useSidebar";
import "./Sidebar.scss";

export const Sidebar = () => {
  const { conversations, setConversations, logout, originConversations } =
    useSidebar();
  return (
    <div className="side-bar-container">
      <SearchInput
        conversations={conversations}
        setConversations={setConversations}
        originConversations={originConversations}
      />
      <Divider variant="middle" component="div" />
      <Conversations conversations={conversations} />
      <div className="side-bar-logout-button">
        <IconButton onClick={logout}>
          <BiLogOut className="side-bar-logout-button-icon" />
        </IconButton>
      </div>
    </div>
  );
};
