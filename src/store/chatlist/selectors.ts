import { nanoid } from 'nanoid';
import { StoreState } from './../index';
export const selectChatList = (state: StoreState) => state.chatList;

export const selectChats = (state: StoreState) =>
  Object.entries(state.chatList)?.map((chat) => ({
    id: nanoid(),
    name: chat[0],
  }));
