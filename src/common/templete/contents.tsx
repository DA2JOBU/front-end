import Button from '@components/elements/Button';
import React, { useEffect, useState, useRef } from 'react';
import Sidebar from '../components/modules/registerSideBar';
import Tab from '@components/modules/tab';

export interface propsType {
  searchKeyword: string;
}

type Props = {
  name: string;
  setIsOpen: boolean;
};

const Contents = (props: Props): JSX.Element => {
  const { name, setIsOpen } = props;
  // 입력 폼 변화 감지하여 입력 값 관리
  const [value, setValue] = useState('');
  // 제출한 검색어 관리
  const [keyword, setKeyword] = useState('');

  const search = useRef();

  useEffect(() => {
    setKeyword('');
  }, []);

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const handleOnChange = (e: { preventDefault: () => void; target: { value: string } }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // 제출한 검색어 state에 담아주는 함수
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setKeyword(value);
  };

  // 검색어를 입력하지 않고 검색 버튼을 눌렀을 경우
  const valueChecker = () => {
    if (value === '') {
      alert('검색어를 입력해주세요.');
    }
  };

  return (
    <>
      {setIsOpen && <Tab handleOnChange={handleOnChange} handleSubmit={handleSubmit} value={value} />}
      <Sidebar searchKeyword={keyword} />
    </>
  );
};

export default Contents;
