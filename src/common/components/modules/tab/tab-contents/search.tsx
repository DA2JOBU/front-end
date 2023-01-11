import React, { useCallback, useEffect, useRef, useState } from 'react';
import Input from '@components/elements/Input';
import { SearchList } from './search-list';
import styled from 'styled-components';

type Props = {
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Contents = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  display: block;
  height: calc(100vh - 128px);
  width: 100%;
`;

const Search = (props: Props) => {
  const { value, handleOnChange, handleSubmit } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Input handleOnChange={handleOnChange} value={value} handleSubmit={handleSubmit} />
      <Contents>
        <p>fnffn</p>
      </Contents>
    </>
  );
};

export { Search };
