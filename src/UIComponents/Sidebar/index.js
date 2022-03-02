import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarRoute } from './SideBarElements';
const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle} offset={-80}>About</SideBarLink>
                    <SideBarLink to="skills" onClick={toggle}>Skills</SideBarLink>
                    <SideBarLink to="experience" onClick={toggle}>Experience</SideBarLink>
                    <SideBarLink to="Contact" onClick={toggle}>Contact</SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
