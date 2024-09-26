import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { usersServices } from "../../../services/users.services";

export const useSidebar = () => {
  const [conversations, setConversations] = useState<User[]>([]);
  const [originConversations, setOriginConversations] = useState<User[]>([]);
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();

  useEffect(() => {
    getConversations();
  }, []);

  const getConversations = async () => {
    const conversations = await usersServices.getConversations();
    setConversations(conversations);
    setOriginConversations(conversations);
  };

  const logout = async () => {
    await usersServices.logout();
    localStorage.removeItem("user");
    setAuthUser(null);
    navigate("/login");
  };

  return { conversations, setConversations, logout, originConversations };
};
