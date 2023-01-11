import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@public/images/search.svg';

const InputContainer = styled.div`
  padding: 29px 28px 28px 28px;
  height: 116px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
  background: ${({ theme }) => theme.color.white};
`;

const InputWrapper = styled.form`
  width: 324px;
  padding: 11px 0;
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};

  &:focus-within {
    border-bottom: 2px solid ${({ theme }) => theme.color.orange};
  }
`;

const InputStyled = styled.input`
  display: block;
  margin: 0;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray40};
  }
`;

type Props = {
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setIsOpen?: () => boolean;
};

const Input = (props: Props) => {
  const { value, handleOnChange, handleSubmit } = props;

  // const handleOnClick = useCallback(() => setIsOpen(true), []);

  return (
    <InputContainer>
      <InputWrapper onSubmit={handleSubmit}>
        <InputStyled type="text" placeholder="장소명을 입력해 주세요" onChange={handleOnChange} value={value} />
        <button type="submit">
          <SearchIcon width="22" height="22" />
        </button>
      </InputWrapper>
    </InputContainer>
  );
};

export default Input;
function setIsOpen(arg0: boolean): any {
  throw new Error('Function not implemented.');
}
