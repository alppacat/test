import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 5vh;
  background-color: #9D958C;
  position: fixed;
  top: 0;
  z-index: 1;
`

export const Links= styled.ul`
  display: flex;
  margin-left: auto;

  li {
    list-style: none;
    padding: 0 15px;
    color: seashell;
    cursor: pointer;
  }
`