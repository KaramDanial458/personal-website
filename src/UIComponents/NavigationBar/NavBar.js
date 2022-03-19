import React from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavBarElements';
import './NavBar.css';

const toggleHome = () => {
    const options = {
        smooth: true,
        duration: 300
    }
    scroll.scrollToTop(options);
}

function NavBar({ toggle }) {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/' onClick={toggleHome} />
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" offset={-80} smooth={true} duration={300}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills" offset={-80} smooth={true} duration={300}>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience" offset={-80} smooth={true} duration={300}>Experience</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to="contact" offset={-80} smooth={true} duration={300}>Contact</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar;