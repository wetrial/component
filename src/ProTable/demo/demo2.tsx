import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { ProTable } from '@wetrial/component';
import { ProColumns, TableDropdown } from '@wetrial/component/es/ProTable';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export interface TableListItem {
  key: number;
  name: string;
  status: string;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
}
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 100; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 70,
  },
  {
    title: '标题',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 100,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    width: 200,
    valueType: 'dateTime',
  },
  {
    title: '更新时间',
    width: 120,
    dataIndex: 'updatedAt',
    valueType: 'date',
  },
  {
    title: '操作',
    dataIndex: 'option',
    width: 120,
    valueType: 'option',
    render: () => [
      <a key="view" target="_blank" rel="noopener noreferrer">
        查看
      </a>,
      <TableDropdown
        key="other"
        onSelect={(key) => window.alert(key)}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

export default () => {
  const [type, setType] = useState<'simple' | 'advance'>('simple');

  const simpleSearch = () => {
    return (
      <Row>
        <Col flex={2}>
          <Input.Search placeholder="请输入" allowClear />
        </Col>
        <Col flex={3}>
          <Button
            onClick={() => {
              setType('advance');
            }}
            type="link"
          >
            更多
          </Button>
        </Col>
      </Row>
    );
  };

  const advanceSearch = () => {
    return (
      <Row>
        <Col flex={2}>
          <Input.Search placeholder="请输入" allowClear />
        </Col>
        <Col flex={3}>
          <Button
            onClick={() => {
              setType('simple');
            }}
            type="link"
          >
            折叠
          </Button>
        </Col>
      </Row>
    );
  };

  return (
    <ProTable<TableListItem>
      columns={columns}
      rowKey="key"
      pagination={{
        showSizeChanger: true,
      }}
      toolBarRender={() => [<Button type="primary">新增</Button>, <Button>其他操作</Button>]}
      searchType={type}
      renderSearch={type === 'simple' ? simpleSearch : advanceSearch}
      dataSource={tableListDataSource}
      containerClassName="xxxxxxx"
      containerStyle={{ border: '3px solid red' }}
      tableAlertRender={() => <div>xxxxxxxxxxxxxxxxxx</div>}
      options={{ density: true, fullScreen: true, setting: true }}
      onColumnsStateChange={(map) => {
        console.log(map);
      }}
      onSizeChange={(size) => {
        console.log(size);
      }}
    />
  );
};
