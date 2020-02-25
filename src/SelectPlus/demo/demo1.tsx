import React from 'react';
import { SelectPlus } from '@wetrial/component';

export default () => {
  const list = [
    { key: 'C#', label: 'C#' },
    { key: 'PPT', label: '最好的语言' },
    { key: 'react', label: 'React' },
  ];
  return <SelectPlus style={{ width: 200 }} list={list} allowClear />;
};
