import styled from 'styled-components';
import RightTabTitle from "./tab";
import { Search } from '@components/modules/tab/tab-contents';
import BottomContent from "@components/elements/bottomContent";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { searchList } from "src/state";

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

const rightTab = (props: Props): JSX.Element  => {
    const { value, handleOnChange, handleSubmit } = props;
    const searchResult = useRecoilValue(searchList); //검색 결과를 가져오는 것
    return (
      <RightTabContainer>
        <UlStyled>
          <RightTabTitle title="장소 등록" />
        </UlStyled>
        <Search value={value} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
        <BottomContent>
          <span>검색 결과 </span>
          {searchResult.length > 0 && <span>{searchResult.length}</span>}
        </BottomContent>
      </RightTabContainer>
    )
}

export default rightTab;