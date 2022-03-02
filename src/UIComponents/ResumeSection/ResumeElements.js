import styled from 'styled-components'
import LogoBackground from '../../Assets/ResumeImageInverted.png'

export const ResumeContainer = styled.div`
  background: url(${LogoBackground});
  background-size: 500px;
  box-shadow: inset 0px 11px 15px -10px #000, inset 0px -11px 15px -10px #000;
  position: relative;
  height: 1180px;
  width: auto;
  display: felx;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 250px;
  }
`

export const Title = styled.h1`
  position: absolute;
  font-size: 2.5rem;
  color: white;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Image = styled.img`
  width: 750px;
  border-radius: 10px;
  padding-right: 0;
  position: relative;
  margin-top: -100px;
  -webkit-filter: drop-shadow(12px 12px 25px rgba(0,0,0,0.5));

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Button = styled.button`
  height: 75px;
  width: 300px;
  border-radius: 10px;
  background-color: #383838;
  font-size: 18px;
  color: #c7c7c7;
  border: #fff solid 4px;
  
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    z-index: 1;
  }
`