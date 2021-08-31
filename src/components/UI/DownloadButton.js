import React from 'react';
import styled from 'styled-components';


const DownloadButton = props => <DownloadLinkBody 
                                    href={props.href} 
                                    download
                                >
                                    {props.title}
                                </DownloadLinkBody>;


const DownloadLinkBody = styled.a`
    cursor: pointer;
    position: relative;
    width: 250px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: rgb(0, 0, 0);
    transition: all 0.5s;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(25, 25, 25, 0.1);
        transition: all 0.3s;
        z-index: 1;
    }
    &:hover::before {
        opacity: 0;
        transform: scale(0.5,0.5);
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(25, 25, 25, 0.5);
        opacity: 0;
        transition: all 0.3s;
        transform: scale(1.2,1.2);
        z-index: 1;
    }
    &:hover::after {
        opacity: 1;
        transform: scale(1,1);
    }
`;


export default DownloadButton;