// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

// export type Message = {
//   text: string;
//   author: string;
// };

// export type MessageState = Message & {
//   id: string;
// };

// // interface ChatsType {
// //   name: string;
// //   messages: MessageState[];
// // }

// interface ChatListType {
//   [id: string]: {
//     name: string;
//     messages: MessageState[];
//   };
// }

// interface ChatsState {
//   chats: ChatListType;
//   chatId: string;
// }

// const initialState: ChatsState = {
// chats: { [id: 'auto']: {
//   id: '1',
//   author: 'ALice in Wonderland',
//   text: 'Все чудесатее и чудесатее'
// }},
// chatId: nanoid()
// };

// const chatListSlice = createSlice({
//   name: 'chatList',
//   initialState,
//   reducers: {
//     addChat: (state, action) => {
//       state.chats[0] = {
//         name: action.payload.name,
//         messages: [],
//       };
//     },
//   },
// });

// export const { addChat } = chatListSlice.actions;
// export const chatListReducer = chatListSlice.reducer;
