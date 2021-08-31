import React from 'react';
import styled from 'styled-components';
import '@fontsource/montserrat/700.css';


const Logo = () => {
    return (
        <LogoBody>ivan<span>danyliuk</span></LogoBody>
    );
};


const LogoBody = styled.div`
    font-family: 'Montserrat';
    color: rgb(255, 255, 255);
    span {
        font-weight: 700;
    }
`;


export default Logo;