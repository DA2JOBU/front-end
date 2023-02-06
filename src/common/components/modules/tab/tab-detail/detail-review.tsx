import ComentBadge from '@components/elements/place-badge';
import Icons from 'public/assets/images/icons';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  padding: 1.8rem 1.3rem;
  .review-text {
    font-weight: 600;
  }
  .count {
    color: ${({ theme }) => theme.color.orange};
  }
`;

const ReviewContainer = styled.div`
  width: 100%;
`;

const Comment = styled.p`
  background: ${({ theme }) => theme.color.gray20};
  border-radius: 6px;
  color: ${({ theme }) => theme.color.gray90};
  display: fit-contents;
  padding: 0.8rem;
  margin-top: 14px;
  font-size: 14px;
  img {
    padding-right: 4px;
  }
`;

const Review = styled.span`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  .star,
  .name {
    color: ${({ theme }) => theme.color.gray80};
    font-size: 14px;
    font-weight: 600;
  }
  .name {
    padding-left: 0.3rem;
  }
  .date {
    color: ${({ theme }) => theme.color.gray70};
    font-size: 12px;
    padding-left: 0.3rem;
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

const DetailReview = (props: { simpleReview: any; ratingAvg: number; name: string; updatedAt: string }) => {
  const { simpleReview, ratingAvg, name, updatedAt } = props;
  return (
    <Container>
      <p className="review-text">
        리뷰 <span className="count">{simpleReview.length}</span>
      </p>
      {simpleReview ? (
        <ReviewContainer>
          <Comment>{simpleReview}</Comment>
          <Review>
            <Icons.Star className={ratingAvg !== 0 ? 'on' : 'off'} width={14} />
            <span className="star">{ratingAvg}</span>
            <span className="name">{name}</span>
            <span className="date">{updatedAt}</span>
          </Review>
        </ReviewContainer>
      ) : (
        <Icons.ReviewBoard />
      )}
    </Container>
  );
};

export default DetailReview;
