import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { searchList } from 'src/state';
import { SearchPlace } from './search-place';
import { searchElement } from 'src/types/searchType';
import { PlaceRegister } from 'src/types/registerType';
import styled from 'styled-components';
import { channel } from 'diagnostics_channel';
import { run } from 'node:test';
import { deletedPlace, placeExist, registerFirstPlace } from '@api/mapApi';
import SearchDetail from '../tab-detail/serach-detail';
import Icons from 'public/assets/images/icons';
import { User } from 'src/types/userType';
import { useUserInfoModalOpen } from 'src/common/hook/modal.hook';
import { getUserInfo } from '@api/auth';
import Modal from '@components/modules/modal';

const SearchListContainer = styled.section`
  float: left;
  position: absolute;
  z-index: 25;
  clear: both;
  width: 23.75rem;
  left: 23.75rem;
  height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.color.white};
  border-left: 1px solid ${({ theme }) => theme.color.gray30};
  padding-bottom: 3.8rem;
`;

const SearchPlaceContainer = styled.div`
  position: relative;
  .label {
    position: absolute;
    right: 28px;
    top: 40px;
  }
  .save {
    fill: ${({ theme }) => theme.color.orange};
    stroke: none;
  }
  .delete {
    fill: none;
    stroke: ${({ theme }) => theme.color.black};
  }
`;
const SearchListTitle = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
  padding: 0 30px;
  display: flex;
  align-items: center;

  .title {
    color: ${({ theme }) => theme.color.gray90};
    font-size: 1rem;
    font-weight: 600;
    padding-right: 0.4rem;
  }
  .count {
    color: ${({ theme }) => theme.color.gray80};
    font-size: 0.9rem;
  }
`;

const SearchListContent = styled.div`
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }

  height: 100%;
  // position: absolute;
  // top: 64px;
  // width: 100%;
`;

type Props = {
  keyword: string;
};

const SearchList = (props: Props) => {
  const { keyword } = props;
  const [place, setPlace] = useState<string>('');
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [detailPopup, setVisible] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const { openUserInfoModal } = useUserInfoModalOpen();
  const accessToken = sessionStorage.getItem('jwtToken');

  const lists = useRecoilValue<searchElement[]>(searchList);
  // const setMyPlaceList = useSetRecoilState(myPlace);

  const getCategory = (category_name: string) => {
    const category_list = category_name.split('>');
    let category = category_list[3] ? category_list[3] : category_list[2] || category_list[1];
    return category.trim();
  };

  const handlerPlace = (list: searchElement, category: string) => {
    const data: any = {
      kakaoId: list.id,
      name: list.place_name,
      category: category,
      x: list.x,
      y: list.y,
      info: {
        url: list.place_url,
        address: list.address_name,
        roadAddress: list.road_address_name,
      },
    };
    registerFirstPlace(data);
  };

  return (
    <SearchListContainer>
      {accessToken === null && isModal && <Modal onClose={() => setIsModal(false)} />}
      {detailPopup && <SearchDetail onClose={() => setVisible(false)} places={place} />}
      <SearchListTitle>
        <span className="title">{keyword}</span>
        <span className="count">검색 결과 {lists.length}</span>
      </SearchListTitle>
      <SearchListContent>
        {lists.map((list: searchElement | any, index: number) => {
          let category = getCategory(list.category_name);
          return (
            <SearchPlaceContainer key={list.id}>
              <label className="label">
                <Icons.Favorites
                  className={active ? 'save' : 'delete'}
                  onClick={() => {
                    handlerPlace(list, category);
                    setIsModal(true);
                  }}
                />
                <input type="checkbox" className="favorites" />
              </label>
              <SearchPlace
                key={index}
                list={list}
                id={list.id}
                category={category}
                onClick={() => {
                  setIsSelected(true);
                  setPlace(list);
                  setVisible(true);
                }}
              />
            </SearchPlaceContainer>
          );
        })}
      </SearchListContent>
    </SearchListContainer>
  );
};

export { SearchList };
