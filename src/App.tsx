import React, { useCallback } from 'react';
import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const stepText = {
  step1: 'step 1 text',
  step2: 'step 2 text',
  step3: 'step 3 text',
}

function App() {

  const handleClick = useCallback(e => {
    console.log('click', e)
  }, []);

  return (
    <StyledApp>
      <header />
      <main>
        <h1>Hi Ada</h1>
        <div>
        <button onClick={handleClick}>Click Me</button>
        </div>
      </main>
    </StyledApp>
  );
}

export default App;
