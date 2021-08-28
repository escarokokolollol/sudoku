import React, { useState, useEffect  } from 'react';
import styled from 'styled-components';
import Board from './Board'

const StyledDiv = styled.div`
  h1{
    color: red;
  }
`

function App() {
  return (
    <StyledDiv>
      <Board/>
    </StyledDiv>
  );
}

export default App;
