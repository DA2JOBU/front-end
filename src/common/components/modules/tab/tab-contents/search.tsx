import React, { useCallback, useEffect, useRef, useState } from 'react';
import Input from '@components/elements/Input';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { searchList } from 'src/state';
import { SearchPlace } from './search-place';
import { searchElement } from 'src/types/searchType';
import { SearchHeader } from './search-header';

type Props = {
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Search = (props: Props) => {
  const { value, handleOnChange, handleSubmit } = props;

  const lists = useRecoilValue<searchElement[]>(searchList);
  const [read, setRead] = useState('');

  useEffect(() => {
    setRead(value);
  });

  return (
    <section>
      <Input handleOnChange={handleOnChange} value={value} handleSubmit={handleSubmit} />
      {/* <SearchHeader length={lists.length} value={read} /> */}
      {lists.map((list: searchElement, index: number) => {
        console.log(lists.length);
        const { address_name, category_group_name, place_name } = list;
        return (
          <SearchPlace
            key={index}
            index={index}
            address_name={address_name}
            category_group_name={category_group_name}
            place_name={place_name}
          />
        );
      })}
    </section>
  );
};

export { Search };
