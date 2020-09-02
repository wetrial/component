import React from 'react';
import { ProDatePicker } from '@wetrial/component';
import moment from 'moment';

const handleChange = (val) => {
  console.log(val);
};
export default () => {
  return (
    <ProDatePicker
      defaultValue={moment('2015/01', 'YYYY-MM')}
      format={'YYYY-MM'}
      picker="month"
      onChange={handleChange}
    />
  );
};
