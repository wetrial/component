import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import { ProTable } from '@wetrial/component';
import { ProColumns } from '@wetrial/component/es/ProTable';

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
    title: '标题',
    dataIndex: 'name',
    render: _ => <a>{_}</a>,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 100,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'createdAt',
    width: 200,
    valueType: 'dateTime',
  },
  {
    title: '更新时间',
    key: 'since2',
    width: 120,
    dataIndex: 'createdAt',
    valueType: 'date',
  },

  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: () => [<a>操作</a>, <a>删除</a>],
  },
];

export default () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      rowKey="key"
      pagination={{
        showSizeChanger: true,
      }}
      toolBarRender={() => [<Button type="primary">新增</Button>, <Button>其他操作</Button>]}
      searchType="simple"
      renderSearch={() => (
        <Row>
          <Col flex={2}>
            <Input.Search placeholder="请输入" allowClear />
          </Col>
          <Col flex={3}>
            <Button type="link">高级搜索</Button>
          </Col>
        </Row>
      )}
    />
  );
};
