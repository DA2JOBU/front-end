import styled from "styled-components";
import Icons from 'public/assets/images/icons';
import { useEffect, useState } from "react";
import { wantPlaceList } from "@api/myPlace";
const BottomContainers = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  height: calc(100vh - 128px);
  width: 100%;
  margin: 0;
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

const PlaceListContainer = styled.div`

`;

const PlaceBottomContent = () => {
    const [wentList, setWentList] = useState([]);
    const [hopeList, setHopeList] = useState([]);

    useEffect(() => {
        if (sessionStorage.getItem('jwtToken') == null) {
            return;
        }
        wantPlaceList().then((res) => {
            setHopeList(res);
        }).catch((error) => {
            alert('로그인을 해주세요');
        });
    }, []);

    const [checkWent, setWent] = useState(true);
    const [checkHope, setHope] = useState(false);

    const handlerWent = () => {
        setWent(true);
        setHope(false);
    }

    const handlerHope = () => {
        setWent(false);
        setHope(true);
    }

    return (
        <BottomContainers>
            <SearchMap onClick={handlerWent}>
                <span className={checkWent ? 'font' : 'font-active'}>가본 곳 {wentList.length}</span>
            </SearchMap>

            <SearchMap onClick={handlerHope}>
                <span className={checkHope ? 'font' : 'font-active'}>가보고 싶은 곳 {hopeList.length}</span>
            </SearchMap>
        </BottomContainers>
    )
}

export default PlaceBottomContent;