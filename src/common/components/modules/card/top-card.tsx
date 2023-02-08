import React, { useState } from 'react';
import styled from 'styled-components';
import TopBadge from '../../elements/top-badge';
import { Place, PlaceTopTen } from 'src/types/searchType';
import Icons from 'public/assets/images/icons';
import ComentBadge from '@components/elements/place-badge';

const CardContainer = styled.div`
  width: 100%;
  padding: 45px 28px 35px 28px;

  border-bottom: 1px solid ${({ theme }) => theme.color.gray30};
  background: ${({ theme }) => theme.color.white};
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 0.3rem;
  justify-content: space-between;

  .title {
    display: flex;
    .place {
      font-size: ${({ theme }) => theme.fontSize.Gtitle};
      color: ${({ theme }) => theme.color.black};
      font-weight: 600;
      padding-right: 4px;
    }
  }
  .checked {
    fill: ${({ theme }) => theme.color.orange};
    stroke: ;
  }
  .stroke {
    fill: none;
    stroke: ${({ theme }) => theme.color.gray80};
  }
`;

const CardBody = styled.div`
  .title {
    padding-bottom: 12px;
    .food {
      padding-right: 6px;
      font-size: ${({ theme }) => theme.fontSize.Stitle};
      font-weight: 600;
      color: ${({ theme }) => theme.color.gray90};
      border-right: 1px solid ${({ theme }) => theme.color.gray40};
    }
    .address {
      padding-left: 6px;
      color: ${({ theme }) => theme.color.gray80};
    }
  }
  .body {
    align-items: center;
    display: flex;

    .star {
      color: ${({ theme }) => theme.color.gray90};
      font-size: 14px;
      padding: 0 18px 0 2px;
      font-weight: 700;
    }

    .unstar {
      color: ${({ theme }) => theme.color.gray80};
      font-size: 14px;
      padding: 0 18px 0 2px;
      font-weight: 700;
    }

    .review {
      color: ${({ theme }) => theme.color.gray80};
      font-size: 14px;
      padding-right: 10px;
    }
    .save {
      color: ${({ theme }) => theme.color.gray80};
      font-size: 14px;
      padding-right: 10px;
    }
  }
  .on {
    fill: ${({ theme }) => theme.color.orange};
    stroke: none;
  }
  .off {
    fill: ${({ theme }) => theme.color.gray70};
    stroke: none;
  }
`;
const CardFooter = styled.div`
  width: 100%;
  margin-top: 14px;

  .comment {
    background: ${({ theme }) => theme.color.gray20};
    border-radius: 6px;
    color: ${({ theme }) => theme.color.gray90};
    display: fit-contents;
    padding: 10px;
    font-size: 14px;
    img {
      padding-right: 4px;
    }
  }
  .coment-null {
    background: ${({ theme }) => theme.color.gray20};
    color: ${({ theme }) => theme.color.gray70};
    font-size: 0.87rem;
    width: 11rem;
    padding: 0.4rem 0.8rem;
    border-radius: 2rem;
  }
`;

const TopCard = (props: { place: PlaceTopTen }): JSX.Element => {
  const { name, category, place_Info } = props.place;
  const [active, setActive] = useState<boolean>(false);

  const saveHandler = (e: React.MouseEvent) => {
    setActive(!active);
    // 등록으로 연결
  };

  return (
    <CardContainer>
      <CardHeader>
        <div className="title">
          <h2 className="place">{name}</h2>
          <TopBadge rank={place_Info?.rank} />
        </div>
        <label className="label">
          {active ? <img src="assets/images/favorites-on.png" /> : <img src="assets/images/favorites.png" />}
          <input type="checkbox" className="favorites" onClick={saveHandler} />
        </label>
      </CardHeader>
      <CardBody>
        <p className="title">
          <span className="food">{category}</span>
          <span className="address">{place_Info?.roadAddress}</span>
        </p>
        <p className="body">
          <Icons.Star className={place_Info?.ratingAvg !== 0 ? 'off' : 'on'} width={14} />
          <span className={place_Info?.ratingAvg !== 0 ? 'unstar' : 'star'}>
            {place_Info?.ratingAvg ? place_Info?.ratingAvg : 0}
          </span>

          <span className="review">리뷰 {place_Info?.reviewCnt ? place_Info?.reviewCnt : '-'}</span>
          <span className="save">저장 {place_Info?.wantPlaceCnt ? place_Info?.wantPlaceCnt : '-'}</span>
        </p>
      </CardBody>
      <CardFooter>
        {/* <span className="coment-null">리뷰를 기다리고 있어요</span>
        <p className="comment">
          <img src="assets/images/quote.svg" />
          {place_Info?.simple_review}
        </p> */}

        {place_Info?.simple_review ? (
          <p className="comment">
            <img src="assets/images/quote.svg" />
            {place_Info?.simple_review}
          </p>
        ) : (
          <span className="coment-null">리뷰를 기다리고 있어요</span>
        )}
      </CardFooter>
    </CardContainer>
  );
};

export default TopCard;
