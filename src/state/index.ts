import { atom } from 'recoil';
import { PlaceRegister, searchElement } from 'src/types/searchType';
export const searchList = atom<searchElement[]>({
  key: 'searchList',
  default: [],
});

export const keyword = atom({
  key: 'keyword',
  default: '',
});

export const myPlace = atom<PlaceRegister[]>({
  key: 'myPlace',
  default: [],
});
