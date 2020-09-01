import React from 'react';
import { ProDatePicker } from '@wetrial/component';

const handleChange = (val) => {
  console.log(val);
};
export default () => {
  return (
    <ProDatePicker
      value="UNUN-UN-UN"
      allowNa={true}
      partialDate={true}
      picker="date"
      onChange={handleChange}
    />
  );
};
