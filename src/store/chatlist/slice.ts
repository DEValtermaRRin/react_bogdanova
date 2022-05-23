import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Message, MessageState } from './types';

export interface ChatListState {
  [key: string]: MessageState[];
}

const initialState: ChatListState = {
  auto: [
    {
      id: '1',
      author: 'Alice in Wonderland',
      text: 'Всё чудесатее и чудесатее',
    },
  ],
};

const chatlistSlise = createSlice({
  name: 'chatlist',
  initialState,
  reducers: {
    addChat(state: ChatListState, action: PayloadAction<{ name: string }>) {
      state[action.payload.name] = [];
    },
    delChat(state: ChatListState, action: PayloadAction<{ chatName: string }>) {
      delete state[action.payload.chatName];
    },
    addMessage(
      state: ChatListState,
      action: PayloadAction<{ chatId: string; message: Message }>,
    ) {
      const { chatId } = action.payload;
      const { text, author } = action.payload.message;
      state[chatId].push({
        id: nanoid(),
        author,
        text,
      });
    },
    delMessages(
      state: ChatListState,
      action: PayloadAction<{ chatId: string }>,
    ) {
      state[action.payload.chatId] = [];
    },
  },
});

export const { addChat, delChat, addMessage, delMessages } =
  chatlistSlise.actions;
export const chatlistReducer = chatlistSlise.reducer;
