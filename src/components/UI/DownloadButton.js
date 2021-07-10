import React from 'react';
import styled from 'styled-components';


const DownloadButton = props => <DownloadLinkBody 
                                    href={props.href} 
                                    download
                                >
                                    {props.title}
                                </DownloadLinkBody>;


const DownloadLinkBody = styled.a`
    width: 180px;
    line-height: 40px;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 20px;
    font-size: 16px;
    text-align: center;
    letter-spacing: 1px;
    background: transparent;
    color: rgb(0, 0, 0);
`;


export default DownloadButton;