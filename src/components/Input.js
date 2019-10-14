import React from 'react';

function InputId({ label = '', type = 'text' }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type}></input>
    </div>
  );
}

export default InputId;
