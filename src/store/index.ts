import { createStore, compose, combineReducers } from 'redux';
import { chatListReducer, ChatListState } from './chatlist/reducer';
import { profileReducer, ProfileState } from './profile/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  profile: ProfileState;
  chatList: ChatListState;
}
export const store = createStore(
  combineReducers<StoreState>({
    profile: profileReducer,
    chatList: chatListReducer,
  }),
  composeEnhancers(),
);
