import styled from 'styled-components';

const PlaceElement = styled.div`
  margin: 10px;
  color: ${({ theme }) => theme.color.gray85};
`;

interface Props {
  placeName: String;
  roadAddress: String;
  address: String;
  index: number;
}

const Place = (props: Props) => {
  const PlaceInfo = props;
  return <PlaceElement>{PlaceInfo.placeName}</PlaceElement>;
};
export default Place;
