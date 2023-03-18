import styled from 'styled-components';
import Icons from 'public/assets/images/icons';
import { useEffect, useState } from 'react';
import { wantPlaceList, wentPlaceList } from '@api/myPlace';
import Pencle from '@public/images/pencle.svg';
import BaseButton from '@components/modules/tab/tab-detail/datail-button/base-link';
import RightTab from '../rightTab';
import Place from '../rightTab/place';

const BottomContainers = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  height: calc(100vh - 128px);
  width: 23.75rem;
  position: relative;
  overflow: auto;
  padding-bottom: 3rem;
`;

const SearchMap = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  padding:  6px 8px;
  font-size: 0.75rem;
  margin: 30px 0px 30px 18px;
  align-items: center;
  color: ${({ theme }) => theme.color.gray70};
  border 1px solid ${({ theme }) => theme.color.gray30};

  .border-non-active{
    border 1px solid ${({ theme }) => theme.color.gray30};
  }

  .border-active{
    border 1px solid ${({ theme }) => theme.color.orange};
  }
  
  .font {
    background-color: #fff;
    color: ${({ theme }) => theme.color.orange};
    padding-left: 0.2rem;
    font-size:0.7rem;
  }
  
  .font-active {
    color:  ${({ theme }) => theme.color.gray70};
    background-color: #fff;
    padding-left: 0.2rem;
    font-size:0.7rem;
  }

  .clicked{
    stroke: none;
    fill: ${({ theme }) => theme.color.orange};
  }
  .stroke {
    stroke: none;
    fill: ${({ theme }) => theme.color.orange};
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 23.75rem;
  padding: 0px 28px 0rem 28px;
  margin-bottom: 1rem;
`;

const EmptyList = styled.div`
  border: 1px solid #d5d5d5;
  align-items: center;
  vertical-align: center;
  text-align: center;
  color: ${({ theme }) => theme.color.gray70};
  width: 20.25rem;
  height: 22.375rem;
  margin: 0 28px;
`;

const PlaceListContainer = styled.div`
  left: 50%;
  transform: translate(-0%, 90%);
`;

const GotoRegister = styled.button`
  background: ${({ theme }) => theme.color.gray20};
  border-radius: 99px;
  padding: 8px 20px;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1rem;
  &:hover {
    background: ${({ theme }) => theme.color.gray30};
  }
`;

const EditButton = styled.button`
  border-radius: 20px;
  padding: 6px 8px;
  font-size: 0.75rem;
  text-align: right;
  margin-left: 6.5rem;
  color: ${({ theme }) => theme.color.gray70};

  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.black};
  right: 0px;
`;

interface Props {
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PlaceBottomContent = (props: Props) => {
  const { value, handleOnChange, handleSubmit, handleDelete } = props;
  const [wentList, setWentList] = useState([]);
  const [hopeList, setHopeList] = useState([]);

  //편집 상태인지 아닌지
  const [editState, setEditState] = useState(false);

  const [listState, setListState] = useState([]); //went가 false, hope가 true

  //등록 창
  const [register, setRegister] = useState(false);
  //버튼 상태
  const [checkWent, setWent] = useState(true);
  const [checkHope, setHope] = useState(false);

  const setEdit = () => {
    setEditState(!editState);
  };

  //바뀌면 보여 줄 데이터 관리
  useEffect(() => {
    setListState(wentList);
  }, [wentList]);

  useEffect(() => {
    setListState(hopeList);
  }, [hopeList]);

  //데이터 세팅
  useEffect(() => {
    if (sessionStorage.getItem('jwtToken') == null) {
      alert('로그인을 해주세요');
      return;
    }
    wentPlaceList()
      .then((res) => {
        setWentList(res);
      })
      .catch((error) => {
        console.log(error);
      });
    wantPlaceList()
      .then((res) => {
        setHopeList(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlerWent = () => {
    setWent(true);
    setHope(false);
    setListState(wentList);
  };

  const handlerHope = () => {
    setWent(false);
    setHope(true);
    setListState(hopeList);
  };

  const dateFormat = (date: string) => {
    return date.substring(2, 10);
  };

  return (
    <BottomContainers>
      {register && (
        <RightTab
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          value={value}
        />
      )}
      <SearchMap onClick={handlerWent}>
        <span className={checkWent ? 'font' : 'font-active'}>가본 곳 {wentList.length}</span>
      </SearchMap>

      <SearchMap onClick={handlerHope}>
        <span className={checkHope ? 'font' : 'font-active'}>가보고 싶은 곳 {hopeList.length}</span>
      </SearchMap>
      <EditButton onClick={setEdit}>편집</EditButton>
      {listState.length == 0 ? (
        <EmptyList>
          <PlaceListContainer>
            {editState == false ? (
              <Pencle />
            ) : (
              <label>
                <input type="checkbox" id="checkbox" />
              </label>
            )}
            <p>장소를 등록해 주세요</p>
            <GotoRegister onClick={() => setRegister(!register)}>등록하기</GotoRegister>
          </PlaceListContainer>
        </EmptyList>
      ) : (
        listState.map((info: any, index: number) => {
          return (
            <Place
              key={index}
              index={index}
              address={info.address_name}
              roadAddress={info.road_address_name}
              placeName={info.place.name}
              date={dateFormat(info.createdAt)}
            />
          );
        })
      )}

      {editState == true ? (
        <Footer>
          <BaseButton value="취소" width="100%" height="3.25rem" fontSize="1rem" />
          <br />
          <BaseButton value="삭제하기" width="100%" height="3.25rem" fontSize="1rem" />
        </Footer>
      ) : null}
    </BottomContainers>
  );
};

export default PlaceBottomContent;
