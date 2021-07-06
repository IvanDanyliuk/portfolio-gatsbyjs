import * as React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import '@fontsource/montserrat'


const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <MainContent>
        {children}
      </MainContent>
    </>
  )
};

export default Layout;


const Header = styled.header`
  position: relative;
  padding: 0 10px;
  width: 100%;
  font-family: 'Montserrat';
  box-sizing: border-box;
  overflow: hidden;
`;
const MainContent = styled.main`
  position: relative;
  padding: 0 10px;
  width: 100%;
  font-family: 'Montserrat';
  box-sizing: border-box;
`;