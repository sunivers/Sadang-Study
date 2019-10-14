import React, { useState } from 'react';

const Form = () => {
  // 1. 데이터 초기화
  const [form, setForm] = useState({ data1: '', data2: '', data3: '' });
  // 5. 동작을 하면 addEventListener와 같이 event를 사용할 수있습니다.
  const handleChange = event => {
    // 6. 하단 input마다 name과 value가 존재 하기 때문에 event.target에서 name과 value를 꺼내 올 수 있습니다.
    const { name, value } = event.target;
    // 7. 불변의 규칙을 지키면서 새롭게 제작되는 값을 setForm을 이용하여 변경합니다. ( 이때 변경값을 뒤에 배치해야 변경됩니다. )
    setForm(prev => [...prev, { [name]: value }]);
  };
  // 2. 화면 Render를 통한 화면 구현
  // 3. 3개의 input 중 랜덤으로 내용을 변경
  // 4. 내용이 변경되면 "change" 이벤트가 동작 ( react에서는 onChange )
  // 8. 변경한 내용으로 다시 Render를 하여 화면을 구현합니다.
  return (
    <div>
      <input
        type="text"
        name="data1"
        value={form.data1}
        onChange={handleChange}
      />
      <input
        type="text"
        name="data2"
        value={form.data2}
        onChange={handleChange}
      />
      <input
        type="text"
        name="data3"
        value={form.data3}
        onChange={handleChange}
      />
    </div>
  );
};

export default Form;
