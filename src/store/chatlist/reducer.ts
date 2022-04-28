import { Reducer } from 'redux';
import { nanoid } from 'nanoid';

import { ADD_CHAT, DEL_CHAT, ADD_MESSAGE, DEL_MESSAGES } from './actions';
import { ChatListActions } from './types';
import { AUTHOR } from './../../components/ChatWindow/constants';

export interface Message {
  id: string;
  author: string;
  value: string;
}

export interface ChatListState {
  [key: string]: Message[];
}

const initialState: ChatListState = {
  auto: [
    {
      id: '1',
      author: 'Alice in Wonderland',
      value: 'Всё чудесатее и чудесатее',
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
            author: AUTHOR.USER,
            value: action.message,
          },
        ],
      };
    }
    case DEL_MESSAGES: {
      if (action.chatId) return { ...state, [action.chatId]: [] };
      
    }
    default:
      return { ...state };
  }
};
