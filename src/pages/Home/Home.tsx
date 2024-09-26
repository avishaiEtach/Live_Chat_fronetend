import React from "react";
import "./Home.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Chat } from "../../components/Chat/Chat";

export const Home = () => {
  return (
    <div className="home-page-container">
      <Sidebar />
      <Chat />
    </div>
  );
};
