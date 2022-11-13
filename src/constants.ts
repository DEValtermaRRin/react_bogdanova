export const AUTHOR = {
  USER: 'USER',
  BOT: 'BOT',
};

const number = Math.floor(Math.random() * 15) + 1;

export const API = `https://picsum.photos/v2/list?page=${number}&limit=25`;
