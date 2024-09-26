import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useSearchInput } from "./hooks/useSearchInput";
import "./SearchInput.scss";

export const SearchInput = ({
  conversations,
  setConversations,
  originConversations,
}: SearchInputProps) => {
  const { onSubmit, search, handleChange } = useSearchInput({
    conversations,
    setConversations,
    originConversations,
  });
  return (
    <form className="search-input-container" onSubmit={onSubmit}>
      <input
        value={search}
        onChange={handleChange}
        placeholder="Search..."
        className="search-input-input"
      />

      <button type="submit" className="search-input-button">
        <IoSearchSharp className="search-input-button-icon" />
      </button>
    </form>
  );
};
