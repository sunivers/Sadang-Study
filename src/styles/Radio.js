import React from 'react';
import styled from 'styled-components';

const radioComponent = props => {
  return (
    <Wrap>
      <input type="radio" {...props}></input>
      <div className="radio"></div>
      <div>{props.label}</div>
    </Wrap>
  );
};

export default radioComponent;

const Wrap = styled.label`
  display: flex;
  align-items: center;
  input {
    display: none;
  }
  div.radio {
    position: relative;
    width: 18px;
    height: 18px;
    border: 2px solid tomato;
    border-radius: 10px;
    margin-right: 5px;
  }

  input[type='radio']:checked ~ div.radio {
    &::after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 13px;
      height: 13px;
      background-color: tomato;
      border-radius: 10px;
    }
  }
`;
