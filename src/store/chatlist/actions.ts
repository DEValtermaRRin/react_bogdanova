import { AddChat, DelChat, AddMessage, DelMessages } from './types';
export const ADD_CHAT = 'CHATLIST::ADD_CHAT';
export const DEL_CHAT = 'CHATLIST::DEL_CHAT';
export const ADD_MESSAGE = 'CHATLIST::ADD_MESSAGE';
export const DEL_MESSAGES = 'CHATLIST::DEL_MESSAGE';

export const addChat: AddChat = (chatName) => ({
  type: ADD_CHAT,
  chatName,
});

export const delChat: DelChat = (chatName) => ({
  type: DEL_CHAT,
  chatName,
});

export const addMessage: AddMessage = (chatId, message, user) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  user,
});

export const delMessage: DelMessages = (chatId) => ({
  type: DEL_MESSAGES,
  chatId,
});
