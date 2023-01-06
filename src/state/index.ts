import { atom } from 'recoil';
import { searchElement } from 'src/types/searchType';
export const searchList = atom<searchElement[]>({
  key: 'searchList',
  default: [],
});

export const searchPlace = atom({
  key: 'keyword',
  default: '',
});
