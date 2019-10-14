import React from 'react';

function InputId({ label = '', props }) {
  return (
    <div>
      <label>{label}</label>
      <input {...props}></input>
    </div>
  );
}

export default InputId;
