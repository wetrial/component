import React from 'react';
import { ColumnHeightOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Tooltip } from 'antd';
import Container from '../../container';

export type DensitySize = 'middle' | 'small' | 'large' | undefined;

const DensityIcon: React.ForwardRefRenderFunction<any, {}> = (_, ref) => {
  const counter = Container.useContainer();
  return (
    <Dropdown
      overlay={
        <Menu
          selectedKeys={[counter.tableSize as string]}
          onClick={({ key }) => {
            if (counter.setTableSize) {
              counter.setTableSize(key as DensitySize);
            }
          }}
          style={{
            width: 80,
          }}
        >
          <Menu.Item key="large">默认</Menu.Item>
          <Menu.Item key="middle">中等</Menu.Item>
          <Menu.Item key="small">紧凑</Menu.Item>
        </Menu>
      }
      trigger={['click']}
    >
      <Tooltip ref={ref} title="表格密度">
        <ColumnHeightOutlined />
      </Tooltip>
    </Dropdown>
  );
};

export default React.forwardRef(DensityIcon);
