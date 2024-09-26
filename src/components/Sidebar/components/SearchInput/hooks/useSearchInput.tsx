import React, { useState } from "react";

export const useSearchInput = ({
  conversations,
  setConversations,
  originConversations,
}: SearchInputProps) => {
  const [search, setSearch] = useState("");

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = ev.target;
    setSearch(value);
  };

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const filterConversation = originConversations.filter((conversation) =>
      conversation.username.toLowerCase().includes(search.toLowerCase())
    );
    setConversations(filterConversation);
  };

  return { onSubmit, search, handleChange };
};
