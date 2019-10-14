import React from 'react';
import { Checkbox, Radio } from '../styles';

const ThemeView = () => {
  return (
    <div>
      <Checkbox
        label="체크박스입니다"
        onChange={event => console.log(event.target.checked)}
      ></Checkbox>
      <Radio
        label="라디오버튼입니다"
        name="radio"
        onChange={event => console.log(event.target.checked)}
      ></Radio>
      <Radio
        label="라디오버튼입니다"
        name="radio"
        onChange={event => console.log(event.target.checked)}
      ></Radio>
    </div>
  );
};

export default ThemeView;
