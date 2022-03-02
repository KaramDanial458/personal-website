import React from 'react'
import { VideoContainer, VideoBg, Video, VideoContent, VideoH1, VideoP } from '../VideoSelection/BGVideoElements'
import VideoImport from '../../Assets/CityOfTears.mp4'

const VideoSelection = () => {
    return (
        <VideoContainer id="video">
            <VideoBg>
                <Video autoPlay loop muted src={VideoImport} type='video/mp4'></Video>
            </VideoBg>
            <VideoContent>
                <VideoH1>Karam Danial</VideoH1>
                <VideoP>4A Biomedical Engineering Student | <b>Software Developer</b></VideoP>
            </VideoContent>
        </VideoContainer>
    )
}

export default VideoSelection
