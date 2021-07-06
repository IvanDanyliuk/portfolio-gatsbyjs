import React from 'react';
import styled from 'styled-components';
import '@fontsource/montserrat/800.css';


const Logo = () => {
    return (
        <LogoBody>ivan<span>danyliuk</span></LogoBody>
    );
};


const LogoBody = styled.div`
    font-family: 'Montserrat';
    color: red;
    span {
        font-weight: 800;
        color: rgb(0, 0, 0);
    }
`;


export default Logo;