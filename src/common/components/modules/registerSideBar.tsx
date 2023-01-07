import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { searchList } from 'src/state';
import Map from '@components/modules/map';
import Tab from '@components/modules/tab';
import { keyword } from 'src/state';
export interface propsType {
  searchKeyword: string;
}

const Sidebar = (props: propsType, { width = 280 }): JSX.Element => {
  // 입력 폼 변화 감지하여 입력 값 관리
  const [Value, setValue] = useState('');
  // 제출한 검색어 관리
  const [Keyword, setKeyword] = useState('');

  const searchResult = useRecoilValue(searchList); //검색 결과를 가져오는 것

  const setWord = useSetRecoilState(keyword);

  useEffect(() => {
    setKeyword(props.searchKeyword);
  }, [props.searchKeyword]);

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const keywordChange = (e: { preventDefault: () => void; target: { value: string } }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // 제출한 검색어 state에 담아주는 함수
  const submitKeyword = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setKeyword(Value);
  };
  
  // 검색어를 입력하지 않고 검색 버튼을 눌렀을 경우
  const valueChecker = () => {
    if (Value === '') {
      alert('검색어를 입력해주세요.');
    }
  };

  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef<HTMLDivElement>(null);

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = (e: any) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      setX(-width);
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  });

  return (
    <div className="container">
      {/* 여기가 탭컨테이너 부분 */}
      <div
        ref={side}
        className="sidebar"
        style={{ width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)` }}
      >
        <button onClick={() => toggleMenu()} className="button">
          {isOpen ? <span>{'>'}</span> : <div>등록하기</div>}
        </button>

        {/*  검색 인풋 부분 */}
        <div className="content">
          <form className="search-form" onSubmit={submitKeyword}>
            <label htmlFor="place" className="form__label">
              <input
                type="text"
                id="movie-title"
                className="form__input"
                name="place"
                onChange={keywordChange}
                placeholder="검색어를 입력해주세요. (ex: 강남 맛집)"
                required
              />
              <div className="btn-box">
                <input className="btn form__submit" type="submit" value="검색" onClick={valueChecker} />
                <div>{Keyword}</div>
              </div>
            </label>
          </form>
          <div>
            {searchResult.length !== 0 ? searchResult[0].place_name : null}
          </div>
        </div>
        {/* 검색 인풋 end */}
        {/* 스토어 리스트 */}
      </div>
      {/* 탭 컨테이너 end */}
      <Map searchKeyword={Keyword} />
    </div>
  );
};

export default Sidebar;
