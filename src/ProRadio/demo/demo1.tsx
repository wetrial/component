import React from 'react';
import { ProRadio } from '@wetrial/component';

export default () => {
  // const list = [
  //   { value: 'C#', label: 'C#' },
  //   { value: 'PPT', label: '最好的语言' },
  //   { value: 'react', label: 'React' },
  // ];
  return (
    <ProRadio.Group>
      <ProRadio value="C#">C#</ProRadio>
      <ProRadio value="PPT#">最好的语言</ProRadio>
      <ProRadio value="react">React</ProRadio>
    </ProRadio.Group>
  );
};
