import { TextFieldProps } from "@mui/material";
import { MyCustomGlobal } from "./classes";

declare global {
  interface Routes {
    path: string;
    component: () => JSX.Element;
    label: string;
  }
  interface Dictionary<T = any> {
    [key: string]: T;
  }

  interface InputProps {
    value: React.InputHTMLAttributes<unknown>["value"];
    onChange: React.InputHTMLAttributes<unknown>["onChange"];
    name: string;
    variant?: TextFieldProps["variant"];
    label: string;
    type?: React.InputHTMLAttributes<unknown>["type"];
    required?: React.InputHTMLAttributes<unknown>["required"];
    className?: React.InputHTMLAttributes<unknown>["className"];
  }

  interface User {
    _id: string;
    username: string;
    email: string;
    gender: string;
    profilePic: string;
  }

  interface Message {
    _id: string;
    senderId: string;
    receiverId: string;
    message: string;
    createdAt: string;
  }
}
