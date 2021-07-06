import React from 'react';
import styled from 'styled-components';
import {FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare';
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin';
import {FaGithubSquare} from '@react-icons/all-files/fa/FaGithubSquare';


const SocialMediaList = () => {
    const media = [
        {
            element: <FaFacebookSquare />, 
            path: 'https://www.facebook.com/ivan.a.danyliuk/'
        }, 
        {
            element: <FaLinkedin />,
            path: 'https://www.linkedin.com/in/ivan-danyliuk/'
        }, 
        {
            element: <FaGithubSquare />,
            path: 'https://github.com/IvanDanyliuk'
        }
    ];
    return (
        <SocialMedia>
            {media.map((icon, index) => <li key={index}>
                                            <SocialMediaLink href={icon.path} target={'_blank'}>
                                                {icon.element}
                                            </SocialMediaLink>
                                        </li>)}
        </SocialMedia>
    );
};


const SocialMedia = styled.ul`
    display: flex;
`;

const SocialMediaLink = styled.a`
    padding: 10px;
    font-size: 30px;
    color: rgb(141, 145, 141);
    transition: all .3s ease-in;

    &:hover {
        color: rgb(0, 0, 0);
    }
`;


export default SocialMediaList;