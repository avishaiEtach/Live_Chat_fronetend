import { createContext, useContext, useState } from "react";

interface SelectedConversationContextType {
  selectedConversation: User | null;
  setSelectedConversation: (selectedConversation: User | null) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

export const SelectedConversationContext =
  createContext<SelectedConversationContextType>({
    selectedConversation: null,
    setSelectedConversation: () => {},
    messages: [],
    setMessages: () => {},
  });

export const useSelectedConversationContext = () => {
  return useContext(SelectedConversationContext);
};

export const SelectedConversationContextProvider = ({ children }: any) => {
  const [selectedConversation, setSelectedConversation] = useState<User | null>(
    null
  );
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <SelectedConversationContext.Provider
      value={{
        selectedConversation,
        setSelectedConversation,
        messages,
        setMessages,
      }}
    >
      {children}
    </SelectedConversationContext.Provider>
  );
};
