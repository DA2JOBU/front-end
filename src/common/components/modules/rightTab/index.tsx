import Tabs from "../tab/tabs";
import TabTitle from "./tab";
import styled from 'styled-components';
import RightTabTitle from "./tab";
import { Search } from '@components/modules/tab/tab-contents';
import Map from '@components/modules/map';

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
    return (
      <RightTabContainer>
        <UlStyled>
          <RightTabTitle title="장소 등록" />
        </UlStyled>
        <Search value={value} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
      </RightTabContainer>
    )
}

export default rightTab;