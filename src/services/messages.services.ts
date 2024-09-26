import { http } from "../http";

export const messagesServices = {
  sendMessage,
  getMessages,
};

async function sendMessage(
  messageToSend: string,
  receiverId: string
): Promise<Message> {
  try {
    const message = await http.post(`/send/${receiverId}`, {
      message: messageToSend,
    });
    return message;
  } catch (err) {
    throw err;
  }
}

async function getMessages(receiverId: string): Promise<Message[]> {
  try {
    const messages = await http.get(`/getMessage/${receiverId}`);
    return messages;
  } catch (err) {
    throw err;
  }
}
