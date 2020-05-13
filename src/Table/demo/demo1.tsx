import React from 'react';
import { Table } from '@wetrial/component';
import { ColumnType } from 'antd/es/table';

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

const columns: ColumnType<TableListItem>[] = [
  {
    title: '标题',
    dataIndex: 'name',
    width: 100,
    render: _ => <a>{_}</a>,
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
  },
  {
    title: '更新时间',
    width: 120,
    dataIndex: 'updatedAt',
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    render: () => [
      <a key="view" target="_blank" rel="noopener noreferrer">
        查看
      </a>,
    ],
  },
];

export default () => {
  return (
    <Table<TableListItem>
      resizeable
      columns={columns}
      rowKey="key"
      dataSource={tableListDataSource}
    />
  );
};
