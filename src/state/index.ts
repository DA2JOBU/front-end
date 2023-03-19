import { atom, selector } from 'recoil';
import { KeywordSearchResult, searchElement } from 'src/types/searchType';
import { PlaceRegister } from 'src/types/registerType';
import user from '@components/modules/modal/user';
import { User } from 'src/types/userType';
import { getRegisterList } from '@api/mapApi';

//카카오 정보 가져올 때
export const searchList = atom<searchElement[]>({
  key: 'searchList',
  default: [],
});

export const keywordSearch = atom<KeywordSearchResult[]>({
  key: 'keywordSearch',
  default: [],
});

//지도 내 검색 기능
export const mapInSearch = atom<boolean>({
  key: 'inMap',
  default: false,
});

//keyword면 키워드 검색
export const keyword = atom<string>({
  key: 'keyword',
  default: '',
});

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