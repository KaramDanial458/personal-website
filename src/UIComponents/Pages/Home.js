import React, { useState } from 'react'
import { homeObjOne } from '../InfoSection/Data'
import InfoSection from '../InfoSection/InfoSection'
import VideoSelection from '../VideoSelection/BGVideo'
import NavBar from '../NavigationBar/NavBar'
import SideBar from '../Sidebar'
import SkillSection from '../Skillsection/SkillSection'
import ResumeSection from '../ResumeSection/ResumeSection'
import Footer from '../Footer/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <VideoSelection />
            <InfoSection {...homeObjOne} />
            <SkillSection />
            <ResumeSection />
            <Footer />
        </>
    )
}

export default Home
