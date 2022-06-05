import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDTVXQ2qtLsQ6L5QitQH5O69RHC9rtIrjU',
  authDomain: 'chat-app-altermarrin.firebaseapp.com',
  projectId: 'chat-app-altermarrin',
  storageBucket: 'chat-app-altermarrin.appspot.com',
  messagingSenderId: '633657999895',
  appId: '1:633657999895:web:12aee3d185c61f2defd252',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

const database = getDatabase(app);

// подключение к "кусочкам" БД
export const userRef = ref(database, 'user');
export const chatsRef = ref(database, 'chats');

export const getChatsById = (chatId: string) =>
  ref(database, `chats/${chatId}`);
