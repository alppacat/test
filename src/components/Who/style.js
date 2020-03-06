import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100vw;
  background-color: #797879ff;
  padding: 60px;
  box-sizing: border-box;

  @media(max-width: 900px){
    flex-direction: column;
  }
  @media(max-width: 550px){
    padding: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  @media(max-width: 900px){
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: seashell;
  margin: 0;
  opacity: .6;
  letter-spacing: -1.9px;

  @media(max-width: 900px){
    text-align: center;
  }
`;
export const Text = styled.p`
  margin: 30px 0;
  padding: 0 30px;
  text-align: justify;
  font-size: 16px;
  color: seashell;
  opacity: .8;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: fit-content;
  opacity: .7;
  img {
      max-width: 100%;
      max-height: 100%;
  }

  @media(max-width: 900px){
    width: 100%;
  }
`
export const Cloud1 = styled.div`
  position: absolute;
  bottom: -10px;
  right: 0;
  z-index: 1;
  width: 500px;
  opacity: .4;  

  img {
      max-width: 100%;
      max-height: 100%;
  }
`