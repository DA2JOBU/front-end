import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
`;

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
