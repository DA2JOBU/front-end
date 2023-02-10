import styled from 'styled-components';

const Contents = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  display: block;
  height: calc(100vh - 260px);
  width: 100%;
  margin: 0;
  position: relative;
  padding-bottom: 3rem;
  
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

interface Props {
  children: React.ReactNode;
}
const BottomContent = ({ children }: Props) => {
  return <Contents>{children}</Contents>;
};
export default BottomContent;
