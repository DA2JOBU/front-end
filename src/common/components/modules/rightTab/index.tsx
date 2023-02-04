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

const RightTabContainer = styled.section`
  overflow: hidden;
  position: absolute;
  z-index: 25;
  clear: both;
  height: calc(100vh - 64px);
  right: 0px;
  width: 380px;
`;

const UlStyled = styled.ul`
  display: flex;
  width: 380px;
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
  const [placeName, setPlace] = useState('');
  const [address, setAddress] = useState('');
  const [roadAddress, setRoadAddress] = useState('');
  return (
    <RightTabContainer>
      {detailPopup &&
        <DetailPlace placeId={placeId} placeName={placeName} address={address} roadAddress={roadAddress} />
      }
      <UlStyled>
        <RightTabTitle title="장소 등록" />
      </UlStyled>
      <Search value={value} handleOnChange={handleOnChange} handleSubmit={handleSubmit} handleDelete={handleDelete} />
      <BottomContent>
        {searchResult.length > 0 && <span style={{ margin: "1em" }}>검색 결과</span>}
        {searchResult.length > 0 && <span>{searchResult.length}</span>}
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
                setPlace(info.place_name);
                setAddress(info.address_name);
                setRoadAddress(info.road_address_name);
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