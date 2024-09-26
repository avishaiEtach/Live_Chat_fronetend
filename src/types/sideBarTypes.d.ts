import { MyCustomGlobal } from "./classes";

declare global {
  interface SearchInputProps {
    conversations: User[];
    setConversations: (value: User[]) => void;
    originConversations: User[];
  }
  interface ConversationsProps {
    conversations: User[];
  }
  interface ConversationProps {
    conversation: User;
  }
}
