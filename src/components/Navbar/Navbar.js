import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavbarLinks from './NavbarLinks';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavbarBody>
            <Logo />
            <NavToggler
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <MenuBtn open /> : <MenuBtn />}
            </NavToggler>
            {
                isOpen ? 
                    (<Menu>
                        <NavbarLinks />
                    </Menu>) :
                    (<Menu open>
                        <NavbarLinks />
                    </Menu>)
            }
        </NavbarBody>
    )
};


const NavbarBody = styled.nav`
    position: relative;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(255, 255, 255);
    z-index: 5;

    @media (max-width: 768px) {
        position: sticky;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`;

const NavToggler = styled.div`
    cursor: pointer;
    display: none;
    height: 100%;

    @media (max-width: 768px) {
        display: flex;
    }
`;

const MenuBtn = styled.div`
    position: relative;
    width: 30px;
    height: 3px;
    align-self: center;
    background: red;
    transition: all .3s linear;
    transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

    ::before,
    ::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 3px;
        background: rgb(0, 0, 0);
        transition: all .3s linear;
    }
    ::before {
        transform: ${props => (props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)')};
        top: -10px;
    }
    ::after {
        opacity: ${props => (props.open ? '0' : '1')};
        transform: ${props => (props.open ? 'rotate(90deg)' : 'rotate(0deg)')};
        top: 10px
    }
`;

const Menu = styled.ul`
    display: flex;
    height: 90vh;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        width: 100%;
        justify-content: center;
        background: rgb(255, 255, 255);
        transition: all .3s ease-in;
        top: 10vh;
        left: ${props => (props.open ? '-100%' : '0')};
    }
`;


export default Navbar;