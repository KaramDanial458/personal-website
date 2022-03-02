import React from 'react'
import { SkillContainer, SkillTitle } from './SkillElements'
import ScrollWindow from './ScrollWindow'

const SkillSection = () => {
    return (
        <>
            <SkillContainer id="skills">
                <SkillTitle>Skills</SkillTitle>
                <ScrollWindow />
            </SkillContainer>
        </>
    )
}

export default SkillSection
