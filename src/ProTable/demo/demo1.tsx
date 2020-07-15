import React, { useState } from 'react';
import { Row, Col, Input, Button, Form, Space } from 'antd';
import { ProTable } from '@wetrial/component';
import { LAYOUT_FORM_TWO, LAYOUT_COL_SEARCH_SIX } from '@wetrial/core/es/constants';
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
      <Form {...LAYOUT_FORM_TWO}>
        <Row>
          <Col {...LAYOUT_COL_SEARCH_SIX}>
            <Form.Item label="姓名" name="name">
              <Input autoComplete="off" placeholder="姓名" />
            </Form.Item>
          </Col>
          <Col {...LAYOUT_COL_SEARCH_SIX}>
            <Form.Item label="邮箱" name="title">
              <Input autoComplete="off" placeholder="邮箱" />
            </Form.Item>
          </Col>
          <Col {...LAYOUT_COL_SEARCH_SIX}>
            <Form.Item label="描述" name="desc">
              <Input autoComplete="off" placeholder="描述" />
            </Form.Item>
          </Col>
          <Form.Item className="wt-search-operator">
            <Space>
              <Button type="primary">查询</Button>
              <Button>重置</Button>
              <Button
                type="link"
                onClick={() => {
                  setType('simple');
                }}
              >
                折叠
              </Button>
            </Space>
          </Form.Item>
        </Row>
      </Form>
    );
  };

  return (
    <ProTable<TableListItem>
      columns={columns}
      rowKey="key"
      toolBarRender={() => [<Button type="primary">新增</Button>, <Button>其他操作</Button>]}
      searchType={type}
      headerTitle="简单搜索页面"
      renderSearch={type === 'simple' ? simpleSearch : advanceSearch}
      dataSource={tableListDataSource}
      onColumnsStateChange={(map) => {
        console.log(map);
      }}
      containerClassName="xxxxxxxxx"
      onSizeChange={(size) => {
        console.log(size);
      }}
    />
  );
};
