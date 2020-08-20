import React from 'react';
import { Form, Button } from 'antd';
import { UserSelect } from '@wetrial/component';

const data = [
  {
    UserId: '001',
    FullName: '张三',
    RoleName: '管理员',
    Avatar: null,
  },
  {
    UserId: '002',
    FullName: '李四',
    RoleName: '秘书',
    Avatar: null,
  },
  {
    UserId: '003',
    FullName: '王五',
    RoleName: '研究者',
    Avatar: null,
  },
  {
    UserId: '004',
    FullName: '令狐冲',
    RoleName: '秘书',
    Avatar: null,
  },
  {
    UserId: '005',
    FullName: '任我行',
    RoleName: '秘书',
    Avatar: null,
  },
];
const handleChange = (v) => {
  console.log(v);
};

const onFinish = (values) => {
  console.log('Success:', values);
};

export default () => {
  return (
    <Form name="basic" onFinish={onFinish} initialValues={{ userSelect: ['001'] }}>
      <Form.Item name="userSelect" label="UserSelect">
        <UserSelect dataSource={data} onChange={handleChange}></UserSelect>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
