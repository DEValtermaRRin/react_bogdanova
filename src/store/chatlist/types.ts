import { ADD_CHAT, DEL_CHAT, ADD_MESSAGE, DEL_MESSAGES } from './actions';

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
