import { atom } from 'recoil';
import { searchElement } from 'src/types/searchType';
import { PlaceRegister } from 'src/types/registerType';

export const searchList = atom<searchElement[]>({
  key: 'searchList',
  default: [],
});

export const keyword = atom({
  key: 'keyword',
  default: '',
});

// export const myPlace = atom<PlaceRegister[]>({
//   key: 'myPlace',
//   default: [],
// });
