import React, { useState } from 'react';
import Input from '@components/elements/Input';
import styled from 'styled-components';
import Icons from 'public/assets/images/icons';

const Contents = styled.article`
  padding: 26px 28px 28px 28px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SearchMap = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  padding:  6px 8px;
  font-size: 0.75rem;
  display: flex;
  width: 96px;
  align-items: center;
  border 1px solid ${({ theme }) => theme.color.gray30};
  color: ${({ theme }) => theme.color.gray70};
  
  .map {
    background-color: #fff;
    color: ${({ theme }) => theme.color.gray90};
    padding-left: 0.2rem;
  }
  .clicked{
    stroke: none;
    fill: ${({ theme }) => theme.color.gray70};
  }
  .stroke {
    stroke: none;
    fill: ${({ theme }) => theme.color.orange};
  }
  .map-active {
    color:  ${({ theme }) => theme.color.gray70};
    background-color: #fff;
    padding-left: 0.2rem;
  }
`;

const SearchBanner = styled.div`
  width: 100%;
  height: 2.85rem;
  padding: 0 28px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.brightOrange};
  .title {
    padding-left: 0.2rem;
  }
`;

interface Props {
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Search = (props: Props) => {
  const { value, handleOnChange, handleSubmit, handleDelete } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const handlerCheck = () => {
    setCheck(!check);
  };

  return (
    <>
      <Contents>
        <Input handleOnChange={handleOnChange} value={value} handleSubmit={handleSubmit} handleDelete={handleDelete} />
        <SearchMap onClick={handlerCheck}>
          <Icons.Check width={14} fill="#b1b1b1" className={check ? 'stroke' : 'checked'} />
          <span className={check ? 'map' : 'map-active'}>지도 내 검색</span>
        </SearchMap>
      </Contents>
      <SearchBanner>
        <Icons.Hand />
        <span className="title"> 회식장소 Top 10</span>
      </SearchBanner>
    </>
  );
};

export { Search };
