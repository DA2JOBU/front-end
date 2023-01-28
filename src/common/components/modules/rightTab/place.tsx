import styled from 'styled-components';

const PlaceElement = styled.button`
    margin:0.5em;
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
    return (
        <div>
            <PlaceElement>
                {PlaceInfo.placeName}
            </PlaceElement>
        </div>
    )
}
export default Place;
