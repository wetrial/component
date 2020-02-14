import React from 'react';
import { omit } from 'lodash';
import { Select } from 'antd';
import { SelectProps } from 'antd/es/select';

export interface IEnumSelectProps<T, VT = string> extends SelectProps<VT> {
  /**
   * 数据源列表
   */
  list: T[];
  /**
   * key&值对应的 属性名
   */
  keyName?: keyof { [key: string]: T }; // string, // keyof T,
  /**
   * label对应的属性名
   */
  label?: keyof { [key: string]: T }; // keyof T
}

export default function<T>(props: IEnumSelectProps<T>) {
  const { list = [], keyName = 'key', label = 'label' } = props;

  const selectProps = omit(props, 'keyName', 'label', 'list');
  return (
    <Select optionFilterProp="children" placeholder="-- 请选择 --" {...selectProps}>
      {list.map(item => (
        <Select.Option key={`${item[keyName]}`} value={item[keyName]}>
          {item[label]}
        </Select.Option>
      ))}
    </Select>
  );
}
