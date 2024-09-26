import { MyCustomGlobal } from "./classes";

declare global {
  interface SelfMessageProps {
    message: Message;
  }
  interface OtherMessageProps {
    message: Message;
  }
}
