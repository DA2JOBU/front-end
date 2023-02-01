import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@public/images/search.svg';
import Icon from '../../../../public/assets/images/icons';

const InputContainer = styled.div`
  text-align: left;
  background: ${({ theme }) => theme.color.white};
  padding-bottom: 15px;
`;

const InputWrapper = styled.form`
  width: 324px;
  padding: 11px 0 8px 0;
  display: flex;
  position: relative;
`;

const InputStyled = styled.input`
  margin: 0;
  width: 100%;
  width: 324px;
  padding: 11px 0 8px 0;
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  &::placeholder {
    color: ${({ theme }) => theme.color.gray40};
  }
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.orange};
  }
  &:focus + button > svg {
    stroke: ${({ theme }) => theme.color.orange};
  }
`;

const Button = styled.button`
  position: absolute;
  right: 2px;
  bottom: 12px;
  .active {
    stroke: ${({ theme }) => theme.color.orange};
  }
`;

type Props = {
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isActive: boolean;
};

const Input = (props: Props) => {
  const { value, handleOnChange, handleSubmit, isActive } = props;

  const iconFocus = () => {};

  return (
    <InputContainer>
      <InputWrapper onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          placeholder="장소명을 입력해 주세요"
          onChange={handleOnChange}
          value={value}
          id="search"
        />
        <Button type="submit" onChange={iconFocus}>
          <Icon.Search />
        </Button>
      </InputWrapper>
    </InputContainer>
  );
};

export default Input;
