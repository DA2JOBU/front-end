import BottomContent from "@components/elements/bottomContent";
import PlaceBottomContent from "@components/modules/myPlace/placeBottomContent";
import RightTabTitle from "@components/modules/rightTab/tab";
import Tab from "@components/modules/tab/tab";
import Tabs from "@components/modules/tab/tabs";
import styled from "styled-components";
import Icons from 'public/assets/images/icons';
const MyPlaceContainer = styled.section`
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
`;

const TeamPlaceContent = styled.div`
    text-align: center;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    
    .text{
        color: ${({ theme }) => theme.color.gray80};
        margin-top: 1rem;
    }
`;

const MyPlace = () => {
    return (
        <MyPlaceContainer>
            <UlStyled>
                <RightTabTitle title='장소 목록' />
            </UlStyled>
            <Tabs>
                <Tab title="내 장소">
                    <PlaceBottomContent />
                </Tab>
                <Tab title="팀 장소">
                    <BottomContent>
                        <TeamPlaceContent>
                            <Icons.Content />
                            <p className="text">
                                기능이 곧 출시됩니다.
                            </p>
                        </TeamPlaceContent>
                    </BottomContent>
                </Tab>
            </Tabs>
        </MyPlaceContainer>
    );
}

export default MyPlace;