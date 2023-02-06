import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
`;

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
