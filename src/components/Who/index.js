import React from 'react'

import Grupo from '../../images/Puebla2019.jpg';
import CloudOne from '../../images/cloud_PNG17.png';

import { MainContainer, Title, Text, Content, ImageContainer, Cloud1 } from './style';

const Who = () => (
  <MainContainer>
    <Content>
      <Title>¿Quiénes somos?</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim sed faucibus. Pellentesque dignissim enim sit amet. A cras semper auctor neque. Orci dapibus ultrices in iaculis. Vel fringilla est ullamcorper eget nulla facilisi. Mollis nunc sed id semper risus in. Libero nunc consequat interdum varius sit amet mattis vulputate. Pellentesque massa placerat duis ultricies lacus. Vivamus arcu felis bibendum ut tristique et egestas. Platea dictumst quisque sagittis purus sit amet. Ultrices in iaculis nunc sed augue lacus viverra. Ultrices in iaculis nunc sed augue lacus. Turpis in eu mi bibendum.
        Sem nulla pharetra diam sit amet nisl suscipit.
      </Text>
    </Content>
    <ImageContainer>
        <img src={Grupo} alt="grupo"/>
      </ImageContainer>
    <Cloud1>
      <img src={CloudOne} alt="nube" />
    </Cloud1>
  </MainContainer>
)

export default Who;