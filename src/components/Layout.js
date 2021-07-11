import * as React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import "@fontsource/montserrat";


const Layout = ({ children }) => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <MainContent>{children}</MainContent>
        </>
    );
};


const Header = styled.header`
    position: relative;
    margin: 0;
    padding: 0 20px;
    width: 100%;
    font-family: "Montserrat";
    box-sizing: border-box;
    overflow: hidden;
	background: rgb(255, 255, 255);
`;

const MainContent = styled.main`
    position: relative;
    margin: 0;
    padding: 0 20px;
    width: 100%;
    min-height: 90vh;
    font-family: "Montserrat";
    box-sizing: border-box;
	background: rgb(255, 255, 255);
`;


export default Layout;


