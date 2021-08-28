import React, { useState, useEffect  } from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
  h1{
    color: red;
  }
`

function Board() {

  const [board, setBoard] = useState();

  const createBoard = () => {
    for (let i = 0; i < 9; i++) {
      setBoard(i)
    }
  }

  useEffect(()=>{
    createBoard();
  });
  return (
    <StyledDiv>
      <h1>Board</h1>
      <p>{board}</p>
    </StyledDiv>
  );
}

export default Board;
