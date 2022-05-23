// import { Dispatch } from 'redux';
// import { AUTHOR } from '../../components/ChatWindow/constants';
// import { AddChat, DelChat, AddMessage, DelMessages, Message } from './types';
export const ADD_CHAT = 'CHATLIST::ADD_CHAT';
export const DEL_CHAT = 'CHATLIST::DEL_CHAT';
export const ADD_MESSAGE = 'CHATLIST::ADD_MESSAGE';
export const DEL_MESSAGES = 'CHATLIST::DEL_MESSAGE';

// export const addChat: AddChat = (chatName) => ({
//   type: ADD_CHAT,
//   chatName,
// });

// export const delChat: DelChat = (chatName) => ({
//   type: DEL_CHAT,
//   chatName,
// });

// export const addMessage: AddMessage = (chatId, message) => ({
//   type: ADD_MESSAGE,
//   chatId,
//   message,
// });

// export const delMessage: DelMessages = (chatId) => ({
//   type: DEL_MESSAGES,
//   chatId,
// });

// let timeout: NodeJS.Timeout;

// export const addMessageWithReply =
//   (chatId: string, message: Message) =>
//   (dispatch: Dispatch<ReturnType<AddMessage>>) => {
//     dispatch(addMessage(chatId, message));

//     if (message.author !== AUTHOR.BOT) {
//       if (timeout) {
//         clearTimeout(timeout);
//       }
//       timeout = setTimeout(() => {
//         dispatch(
//           addMessage(chatId, {
//             text: 'Some answer from BOT',
//             author: AUTHOR.BOT,
//           }),
//         );
//       }, 1000);
//     }

//     if (message.author !== AUTHOR.BOT && message.text === '') {
//       if (timeout) {
//         clearTimeout(timeout);
//       }
//       timeout = setTimeout(() => {
//         dispatch(
//           addMessage(chatId, {
//             text: 'You entered an empty message',
//             author: AUTHOR.BOT,
//           }),
//         );
//       }, 1000);
//     }
//   };
