import styled from 'styled-components';
import RightTabTitle from "./tab";
import { Search } from '@components/modules/tab/tab-contents';
import BottomContent from "@components/elements/bottomContent";
import { useRecoilValue } from 'recoil';
import { searchList } from "src/state";
import Place from './place';
import { searchElement } from 'src/types/searchType';
import { useState } from 'react';
import DetailPlace from './detailPlace';
import MapPin from '@public/images/map-pin.svg';

const RightTabContainer = styled.section`
  position: absolute;
  z-index: 25;
  clear: both;
  height: calc(100vh - 64px);
  right: 0px;
  width: 380px;
`;

const UlStyled = styled.ul`
  display: flex;
`;

const SearchListTitle = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0 15px;
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

type Props = {
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const RightTab = (props: Props): JSX.Element => {
  const { value, handleOnChange, handleSubmit, handleDelete } = props;
  const searchResult = useRecoilValue<searchElement[]>(searchList); //검색 결과를 가져오는 것s
  const [detailPopup, setVisible] = useState(false);
  const [placeId, setPlaceId] = useState('');
  const [placeName, setName] = useState('');
  const [address, setAddress] = useState('');
  const [roadAddress, setRoadAddress] = useState('');
  const [category, setCategory] = useState('');
  const [placeUrl, setPlaceUrl] = useState('');
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  return (
    <RightTabContainer>
      {detailPopup &&
        <DetailPlace onClose={() => setVisible(false)} placeId={placeId} placeName={placeName} address={address} roadAddress={roadAddress} category={category} placeUrl={placeUrl} x={x} y={y} />
      }
      <UlStyled>
        <RightTabTitle title="장소 등록" />
      </UlStyled>
      <Search value={value} handleOnChange={handleOnChange} handleSubmit={handleSubmit} handleDelete={handleDelete} />
      <BottomContent>
        <SearchListTitle>
          {searchResult.length > 0 && <span className="count">검색 결과 {searchResult.length}</span>}
        </SearchListTitle>
        {searchResult.map((info: searchElement, index: number) => {
          return (
            <Place
              key={index}
              index={index}
              address={info.address_name}
              roadAddress={info.road_address_name}
              placeName={info.place_name}
              onClick={() => {
                setPlaceId(info.id);
                setName(info.place_name);
                setAddress(info.address_name);
                setRoadAddress(info.road_address_name);
                setCategory(info.category_name);
                setPlaceUrl(info.place_url);
                setX(info.x);
                setY(info.y);
                setVisible(true);
              }}
            />
          );
        })}
      </BottomContent>
    </RightTabContainer>
  )
}

export default RightTab;