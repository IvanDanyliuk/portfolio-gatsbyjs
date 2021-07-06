import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const NavbarLinks = () => {
    return (
        <>
            <NavLink><Link to="/">Home</Link></NavLink>
            <NavLink><Link to="/about">About</Link></NavLink>
            <NavLink><Link to="/projects">Projects</Link></NavLink>
        </>
    );
};


const NavLink = styled.li`
    padding: 0 10px;
    font-size: 16px;
    list-style: none;
    box-sizing: border-box;
    a {
        text-decoration: none;
        color: rgb(0, 0, 0);
    }
    &:hover {
        a {
            color: red;
        }
    }

    @media (max-width: 768px) {
        padding: 20px 10px;
        font-size: 26px;
    }
`;


export default NavbarLinks;