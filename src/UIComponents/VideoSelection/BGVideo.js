import React from 'react'
import { VideoContainer, VideoBg, Video, VideoContent, VideoH1, VideoP } from '../VideoSelection/BGVideoElements'
import VideoImport from '../../Assets/CityOfTears.mp4'
import { FaLinkedin, FaPhoneSquareAlt, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'
import { Logos, Fab } from '../Skillsection/SkillElements'
import ToolTip from '../Skillsection/ToolTip'
import 'tippy.js/dist/tippy.css'
import Tippy from '@tippyjs/react'

const VideoSelection = () => {
    return (
        <VideoContainer id="video">
            <VideoBg>
                <Video autoPlay loop muted src={VideoImport} type='video/mp4'></Video>
            </VideoBg>
            <VideoContent>
                <VideoH1>Karam Danial</VideoH1>
                <VideoP>University of Waterloo Engineering | <b>Software Developer</b></VideoP>
                <center>
                    <Logos>
                        <a href="https://www.linkedin.com/in/karam-danial-523509156/" target="_blank"><Tippy content={"Karam Danial"}>
                            <FaLinkedin size={40} style={{ color: '#ffffff' }} />
                        </Tippy></a>
                        <a href="https://github.com/KaramDanial458" target="_blank"><Tippy content={"KaramDanial458"}>
                            <FaGithubSquare size={40} style={{ color: '#ffffff' }} />
                        </Tippy></a>
                        <a href="mailto:karamdanial31@gmail.com">
                            <Tippy content={<ToolTip title="KaramDanial31@gmail.com" bullets={[""]} />}>
                                <FaEnvelopeSquare size={40} style={{ color: '#ffffff' }} />
                            </Tippy></a>
                        <a href="talk:647-574-3693">
                            <Tippy content={<ToolTip title="647-574-3693" bullets={[""]} />}>
                                <FaPhoneSquareAlt size={40} style={{ color: '#ffffff' }} />
                            </Tippy>
                        </a>
                    </Logos>
                </center>
            </VideoContent>
        </VideoContainer >
    )
}

export default VideoSelection
