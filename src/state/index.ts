import { atom } from 'recoil';
import { searchElement } from 'src/types/searchType';
import { PlaceRegister } from 'src/types/registerType';
import user from '@components/modules/modal/user';
import { User } from 'src/types/userType';

export const searchList = atom<searchElement[]>({
  key: 'searchList',
  default: [],
});

export const keyword = atom<string>({
  key: 'keyword',
  default: '',
});

// export const myPlace = atom<PlaceRegister[]>({
//   key: 'myPlace',
//   default: [],
// });

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    // setSelf -> Callbacks to set or reset the value of the atom.
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
	
    // onSet -> Subscribe to changes in the atom value.
    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const userState = atom<User[]>({
  key: 'jwtToken',
  default: [],
  effects: [localStorageEffect('jwtToken')],
});