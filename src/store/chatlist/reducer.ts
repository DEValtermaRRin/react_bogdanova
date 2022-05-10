import { Reducer } from 'redux';
import { nanoid } from 'nanoid';

import { ADD_CHAT, DEL_CHAT, ADD_MESSAGE, DEL_MESSAGES } from './actions';
import { ChatListActions, Message, MessageState } from './types';
import { AUTHOR } from './../../components/ChatWindow/constants';

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

export const chatListReducer: Reducer<ChatListState, ChatListActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return { ...state, [action.chatName]: [] };
    }
    case DEL_CHAT: {
      const chats = { ...state };
      delete chats[action.chatName];
      return chats;
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatId]: [
          ...state[action.chatId],
          {
            id: nanoid(),
            author: action.message.author,
            text: action.message.text,
          },
        ],
      };
    }
    case DEL_MESSAGES: {
      return { ...state, [action.chatId]: [] };
    }
    default:
      return state;
  }
};
