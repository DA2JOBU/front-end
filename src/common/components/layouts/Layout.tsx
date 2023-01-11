import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
