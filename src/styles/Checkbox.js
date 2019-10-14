import React from 'react';
import styled from 'styled-components';

const CheckboxComponent = props => {
  return (
    <Wrap>
      <input type="checkbox" {...props}></input>
      <div className="checkbox"></div>
      <div>{props.label}</div>
    </Wrap>
  );
};

export default CheckboxComponent;

const Wrap = styled.label`
  display: flex;
  align-items: center;
  input {
    display: none;
  }
  div.checkbox {
    position: relative;
    width: 18px;
    height: 18px;
    border: 2px solid tomato;
    margin-right: 5px;
  }

  input[type='checkbox']:checked ~ div.checkbox {
    &::after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 13px;
      height: 13px;
      background-color: tomato;
    }
  }
`;
