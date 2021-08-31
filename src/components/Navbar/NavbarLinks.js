import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const NavbarLinks = () => {
    return (
        <>
            <NavLink><Link to="/">Home</Link></NavLink>
            <NavLink><Link to="/about">About</Link></NavLink>
            <NavLink><Link to="/projects">Projects</Link></NavLink>
            <NavLink><Link to="/contact">Contact</Link></NavLink>
        </>
    );
};


const NavLink = styled.li`
    a {
        cursor: pointer;
        position: relative;	
        margin: 0 10px;
        padding: 10px 20px;
        padding-right: 12px;
        letter-spacing: 2px;
        font-size: 14px;
        color: rgb(255, 255, 255);
        transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);	
        user-select: none;
        box-sizing: border-box;

        &:before, &:after {
            content: '';
            position: absolute;
            top: 0;
            width: 0;
            height: 100%;
            transition: inherit;
            z-index: -1;
        }
        &:before {
            right: 0;
            border: 1px solid rgb(255, 255, 255);
            border-left: 0;
            border-right: 0;
        }
        &:after {
            left: 0;
        }
        &:hover {
            color: rgb(0, 0, 0);
	        transition-delay: .5s;
        }
        &:hover:before, &:hover:after {
            width: 100%;
        }
        &:hover:before {
            transition-delay: 0s;
        }
        &:hover:after {
            background: rgb(255, 255, 255);
	        transition-delay: .35s;
        }
    }

    @media (max-width: 768px) {
        margin: 30px 0;
        a {
            font-size: 20px;
            color: rgb(0, 0, 0);
        }
    }
`;


export default NavbarLinks;