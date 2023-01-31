import Marker from '@public/images/marker.png';
import styled from 'styled-components';
import RightTabTitle from '../tab';
const DetailContainer = styled.section`
  overflow: hidden;
  position: absolute;
  z-index: -1;
  clear: both;
  right: 0px;
  width: 380px;
  height: 100vh;
`;

const UlStyled = styled.ul`
  display: flex;
  width: 380px;
`;

export interface placeDetail{
    placeName:string;
    address:string;
    roadAddress:string;
}

const SearchList = (props: placeDetail) => {
    const {placeName, address, roadAddress} = props;
    return (
        <div>
            <UlStyled>
                <RightTabTitle title={placeName} />
            </UlStyled>
            <div>
                주소
            </div>
            <div>
                장소구분
            </div>
            <div>
                만족도, 참석인원, 인당 가격대
            </div>
            <div>
                분위기, 조명밝기, 기타
            </div>
            <div>
                한 줄 리뷰
            </div>
        </div>
    )
}
export default SearchList;