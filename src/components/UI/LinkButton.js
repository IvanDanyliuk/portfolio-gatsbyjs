import React from 'react';
import styled from 'styled-components';


const LinkButton = props => <LinkBody
                                href={props.href}
                                target={props.target}
                            >
                                {props.title}
                            </LinkBody>;


const LinkBody = styled.a`
    padding: 10px 5px;
    width: 28%;
    display: inline-block;
    font-size: 12px;
    text-align: center;
    border: 1px solid rgb(36, 36, 36);
    border-radius: 3px;
    background: rgb(36, 36, 36);
    color: rgb(255, 255, 255);
    transition: .3s ease-in-out;
    box-sizing: border-box;

    &:hover {
        background: rgb(255, 255, 255);
        color: rgb(36, 36, 36);
    }

    @media (max-width: 768px) {
        padding: 10px 5px;
    }
`;


export default LinkButton;