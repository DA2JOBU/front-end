import React, { useCallback, useEffect, useRef, useState } from 'react';
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
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 36px;
  bottom: 16px;
  margin-left: 10px;
`;

type Props = {
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Input = (props: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const { value, handleOnChange, handleSubmit, handleDelete } = props;
  const [hasFocus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    if (document.hasFocus() && ref.current?.contains(document.activeElement)) {
      setFocus(true);
    }
  }, []);

  return (
    <InputContainer>
      <InputWrapper onSubmit={handleSubmit}>
        <InputStyled
          ref={ref}
          type="text"
          placeholder="장소명을 입력해 주세요"
          onChange={handleOnChange}
          value={value}
          id="search"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <Button type="submit">
          <Icon.Search color={hasFocus ? '#ff5100' : '#262626'} />
        </Button>
        <DeleteButton onClick={handleDelete}>{value ? <Icon.Delete /> : ''}</DeleteButton>
      </InputWrapper>
    </InputContainer>
  );
};

export default Input;
