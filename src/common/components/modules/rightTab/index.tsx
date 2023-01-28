import styled from 'styled-components';
import RightTabTitle from "./tab";
import { Search } from '@components/modules/tab/tab-contents';
import BottomContent from "@components/elements/bottomContent";
import { useRecoilValue } from 'recoil';
import { searchList } from "src/state";
import Place from './place';
import { searchElement } from 'src/types/searchType';

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
};

const RightTab = (props: Props): JSX.Element  => {
    const { value, handleOnChange, handleSubmit } = props;
    const searchResult = useRecoilValue<searchElement[]>(searchList); //검색 결과를 가져오는 것
    return (
      <RightTabContainer>
        <UlStyled>
          <RightTabTitle title="장소 등록" />
        </UlStyled>
        <Search value={value} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
        <BottomContent>
          <span style={{margin:"1em"}}>검색 결과</span>
          {searchResult.length > 0 && <span>{searchResult.length}</span>}
          {searchResult.map((info: searchElement, index: number) => {
            const { address_name, place_name, road_address_name } = info;
            return (
              <Place
                key={index}
                index={index}
                address={address_name}
                roadAddress={road_address_name}
                placeName={place_name}
              />
            );
          })}
        </BottomContent>
      </RightTabContainer>
    )
}

export default RightTab;