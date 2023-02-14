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
  width: 23.75rem;
  background-color: ${({ theme }) => theme.color.white};
`;

const UlStyled = styled.ul`
  display: flex;
`;

const TeamPlaceContent = styled.div`
    text-align: center;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, 150%);
    
    .text{
        color: ${({ theme }) => theme.color.gray80};
        margin-top: 1rem;
    }
`;

const BottomContent = styled.div`
    width: 23.75rem;
    z-index: 26;
    background-color: ${({ theme }) => theme.color.white};
`;

interface Props {
    value: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  };

const MyPlace = (props: Props) => {
    const { value, handleOnChange, handleSubmit, handleDelete } = props;
    return (
        <MyPlaceContainer>
            <UlStyled>
                <RightTabTitle title='장소 목록' />
            </UlStyled>
            <Tabs>
                <Tab title="내 장소">
                    <PlaceBottomContent handleOnChange={handleOnChange} handleSubmit={handleSubmit} handleDelete={handleDelete} value={value}/>
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