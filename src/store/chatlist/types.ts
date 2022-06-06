export const ADD_CHAT = 'CHATLIST::ADD_CHAT';
export const DEL_CHAT = 'CHATLIST::DEL_CHAT';
export const ADD_MESSAGE = 'CHATLIST::ADD_MESSAGE';
export const DEL_MESSAGES = 'CHATLIST::DEL_MESSAGE';

export type ChatListActions =
  | ReturnType<AddChat>
  | ReturnType<DelChat>
  | ReturnType<AddMessage>
  | ReturnType<DelMessages>;

export type Message = {
  text: string;
  author: string;
};

export type MessageState = Message & {
  id: string;
};

export interface Chat {
  id: string;
  name: string;
  messages: MessageState[];
}

export type AddChat = (chatName: string) => {
  type: typeof ADD_CHAT;
  chatName: string;
};

export type DelChat = (chatName: string) => {
  type: typeof DEL_CHAT;
  chatName: string;
};

export type AddMessage = (
  chatId: string,
  message: Message,
) => {
  type: typeof ADD_MESSAGE;
  chatId: string;
  message: Message;
};

export type DelMessages = (chatId: string) => {
  type: typeof DEL_MESSAGES;
  chatId: string;
};
