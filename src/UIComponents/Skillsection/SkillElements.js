import styled from 'styled-components'
import logoBackground from '../../Assets/ResumeBackground.png'

export const SkillTitle = styled.h1`
  position: absolute;
  font-size: 2.5rem;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
`

export const SkillContainer = styled.div`
  // background-image: url(${logoBackground});
  position: relative;
  background-size: 550px;
  height: 300px;
  display: flex;
  align-items: center;
  box-shadow: inset 0px 11px 15px -10px #000;
`

export const WindowContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 90%;
  top 10%;
  height: 250px;
  margin: auto;
  display: flex;
  align-items: center;
`

export const Slider = styled.div`
  animation: slidein 10s linear infinite;
  white-space: nowrap;
  
  @keyframes slidein {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`

export const Logos = styled.div`
  width: 100%;
  display: inline-block;
  margin: 0px 0;
`

export const Fab = styled.div`
  width: calc(100% / 9);
  animation: fade-in 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
  display: inline-block;
  
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`