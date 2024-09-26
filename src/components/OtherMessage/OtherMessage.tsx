import { formatWhatsAppTime } from "../../assets/util";
import "./OtherMessage.scss";

export const OtherMessage = ({ message }: OtherMessageProps) => {
  return (
    <div className="other-messages-container">
      <div className="flex g10">
        {/* <p className="conversation-icon">{other_message.name[0]}</p> */}
        <div className="other-messages-text-content">
          {/* <p className="conversation-title">{other_message.name}</p> */}
          <p className="conversation-lastMessage">{message.message}</p>
          <p className="conversation-timeStamp">
            {formatWhatsAppTime(new Date(message.createdAt))}
          </p>
        </div>
      </div>
    </div>
  );
};
