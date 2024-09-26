import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { io, Socket } from "socket.io-client";

interface SocketContextType {
  socket: any;
  setSocket: (socket: any) => void;
  onlineUsers: string[];
  setOnlineUsers: (onlineUsers: string[]) => void;
}

export const SocketContext = createContext<SocketContextType>({
  socket: null,
  setSocket: () => {},
  onlineUsers: [],
  setOnlineUsers: () => {},
});

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }: any) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io(
        process.env.NODE_ENV === "production" ? "/api" : "//localhost:8080",
        {
          query: {
            userId: authUser._id,
          },
        }
      );
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider
      value={{ socket, onlineUsers, setOnlineUsers, setSocket }}
    >
      {children}
    </SocketContext.Provider>
  );
};
