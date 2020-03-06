import React from 'react';
import styled from 'styled-components';
import bg from '../../images/Hawc_November_2016_panorama.png';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to top, 
    rgba(121,120,121,1), rgba(121,120,121,.9),
    rgba(121,120,121,.6),
    rgba(5,25,55,.4), rgba(11,50,86,.4),
    rgba(14,77,118,.4), rgba(11,107,149,.4),
    rgba(5,138,180,.4)), url(${bg});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;

  @media(max-width: 850px) {
    background-size: cover;
  }
`
export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 70px;
`
export const Title = styled.h1`
  color: seashell;
  font-family: sans-serif;
  font-size: 60px;
  opacity: .7;
  margin: 0;

  @media(max-width: 850px){
    font-size: 35px;
  }
  @media(max-width: 850px){
    font-size: 70px;
    text-align: center;
  }
  @media(max-width: 375px){
    font-size: 40px;
  }
`;

export const Subtitle = styled.h3`
  color: seashell;
  font-family: sans-serif;
  font-size: 25px;
  opacity: .8;
`
export const Mas = styled.div`
  margin-top: auto;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
  animation: bounce 3.6s ease infinite;
  transform-origin: 50% 50%;

  @keyframes bounce {
  0% {
    transform: translateY(0);
  }
  5.55556% {
    transform: translateY(0);
  }
  11.11111% {
    transform: translateY(0);
  }
  22.22222% {
    transform: translateY(-15px);
  }
  27.77778% {
    transform: translateY(0);
  }
  33.33333% {
    transform: translateY(-15px);
  }
  44.44444% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}


  .MuiSvgIcon-fontSizeLarge {
    font-size: 49px;
    color: seashell;
  }
`

export const Cloud1 = styled.div`
  position: absolute;
  bottom: -120px;
  right: -550px;
  opacity: .3;
  z-index: 1;
`
export const Cloud2 = styled.div`
  position: absolute;
  bottom: -120px;
  left: 3px;
  z-index: 1;
`