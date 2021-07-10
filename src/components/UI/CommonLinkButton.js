import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';


const CommonLinkButton = props => <CommonLinkBody 
                                    to={props.to}
                                >
                                    {props.title}
                                </CommonLinkBody>;


const CommonLinkBody = styled(Link)`
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


export default CommonLinkButton;