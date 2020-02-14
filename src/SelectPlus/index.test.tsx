import { mount } from 'enzyme';
import React from 'react';
import SelectPlus from './index';

describe('SelectPlus', () => {
  it('simple list', () => {
    const list = [
      { label: 'C#', key: 'C#' },
      { label: '最好的语言', key: 'PPT' },
      { label: 'REACT', key: 'REACT' },
    ];
    const wraper = mount(<SelectPlus list={list} />);
    expect(wraper.find('_default').props().list).toEqual(list);
  });
});
