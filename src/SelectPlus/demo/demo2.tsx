import React from 'react';
import { SelectPlus } from '@wetrial/component';

export default () => {
  const list = [
    { id: 'C#', text: 'C#' },
    { id: 'PPT', text: '最好的语言' },
    { id: 'react', text: 'React' },
  ];
  return <SelectPlus style={{ width: 200 }} list={list} keyName="id" label="text" />;
};
