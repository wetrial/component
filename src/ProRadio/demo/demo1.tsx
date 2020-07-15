import React from 'react';
import { ProRadio } from '@wetrial/component';
import { RadioChangeEvent } from 'antd/es/radio';

export default () => {
  const handleChange = (e: RadioChangeEvent) => {
    // e可能为undefined
    console.log(e && e.target.value);
  };
  return (
    <ProRadio.Group onChange={handleChange}>
      <ProRadio value="C#">C#</ProRadio>
      <ProRadio value="PPT#">最好的语言</ProRadio>
      <ProRadio value="react">React</ProRadio>
    </ProRadio.Group>
  );
};
