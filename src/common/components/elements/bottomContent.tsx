import styled from "styled-components";

const Contents = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  display: block;
  height: calc(100vh - 128px);
  width: 100%;
  margin: 0;
`;

interface Props {
    children: React.ReactNode;
}
const BottomContent = ({children}: Props) => {
    return (
        <Contents>
            {children}
        </Contents>
    )
}
export default BottomContent;