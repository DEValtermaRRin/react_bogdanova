import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { AUTHOR } from 'src/constants';
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

let timeout: NodeJS.Timeout;
export const addMessageWithReply = createAsyncThunk(
  'chatlist/addMessageWithReply',
  async (
    { chatId, message }: { chatId: string; message: Message },
    { dispatch },
  ) => {
    dispatch(addMessage({ chatId, message }));
    if (message.author !== AUTHOR.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        dispatch(
          addMessage({
            chatId,
            message: {
              author: AUTHOR.BOT,
              text: 'Some answer from BOT',
            },
          }),
        );
      }, 1000);
    }
  },
);

export const { addChat, delChat, addMessage, delMessages } =
  chatlistSlise.actions;
export const chatlistReducer = chatlistSlise.reducer;
