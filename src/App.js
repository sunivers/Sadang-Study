import React from 'react';
import Input from './components/Input.js';
import Button from './components/Button.js';
import styled from 'styled-components';

function App() {
  return (
    <Wrap>
      <h2>Log In</h2>
      <Input label="E-mail" type="text"></Input>
      <Input label="PW" type="password"></Input>
      <Button></Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 500px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #eee;
`;

export default App;
