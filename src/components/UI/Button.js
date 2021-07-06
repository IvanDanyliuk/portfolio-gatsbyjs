import React from 'react';
import styled from 'styled-components';


const Button = props => <BtnBody 
                            type={'button'} 
                            onClick={props.onClick}
                        >
                            {props.title}
                        </BtnBody>;

const BtnBody = styled.button`
    width: 180px;
    height: 40px;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 20px;
    font-size: 16px;
    letter-spacing: 1px;
    background: transparent;
`;


export default Button;