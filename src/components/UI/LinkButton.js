import React from 'react';
import styled from 'styled-components';


const LinkButton = props => <LinkBody
                                href={props.href}
                                target={props.target}
                            >
                                {props.title}
                            </LinkBody>;


const LinkBody = styled.a`
    padding: 5px;
    width: 28%;
    display: inline-block;
    font-size: 12px;
    text-align: center;
    border-radius: 3px;
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);

    @media (max-width: 768px) {
        padding: 10px 5px;
    }
`;


export default LinkButton;