import React from "react";
import { TextField } from "@mui/material";
import { useInput } from "./hooks/useInput";
import "./Input.scss";

export const Input = ({
  value,
  onChange,
  name,
  variant = "outlined",
  label,
  type = "text",
  required = false,
  className = "",
}: InputProps) => {
  const { showPassword, inputProps } = useInput();

  return (
    <TextField
      id="input"
      label={label}
      variant={variant}
      className={`input ${className}`}
      name={name}
      type={showPassword && type === "password" ? "text" : type}
      required={required}
      value={value}
      onChange={onChange}
      InputProps={type === "password" ? inputProps : undefined}
    />
  );
};
