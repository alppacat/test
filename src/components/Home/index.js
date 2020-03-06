import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CloudOne from '../../images/cloud_PNG24.png';
import CloudTwo from '../../images/cloud_PNG9.png';
import { MainContainer, ContainerTitles,
   Title, Subtitle,
    Mas, Cloud1,
    Cloud2 } from './styles';

const Home = () => (
  <MainContainer>
    <ContainerTitles>
      <Title>Gravitación y Altas Energías</Title>
      <Subtitle>UNAM</Subtitle>
    </ContainerTitles>
    <Mas>
        <ExpandMoreIcon fontSize="large"/>
    </Mas>
    <Cloud1>
      <img src={CloudOne} alt="nube" />
    </Cloud1>
    <Cloud2>
      <img width="600px" src={CloudTwo} alt="nube" />
    </Cloud2>

  </MainContainer>
)

export default Home;