import { formatWhatsAppTime } from "../../assets/util";
import "./SelfMessage.scss";

export const SelfMessage = ({ message }: SelfMessageProps) => {
  return (
    <div className="self-message-container">
      <div className="self-message-box">
        <p>{message.message}</p>
        <p className="self-message-timeStamp">
          {formatWhatsAppTime(new Date(message.createdAt))}
        </p>
      </div>
    </div>
  );
};
