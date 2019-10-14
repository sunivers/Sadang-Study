import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return <StyledButton>SEND</StyledButton>;
};

const StyledButton = styled.button`
  background: powderblue;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(100, 100, 255, 0.9);
  }

  & + button {
    margin-left: 1rem;
  }
`;

export default Button;
