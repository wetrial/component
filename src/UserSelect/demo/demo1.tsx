import React from 'react';
import { Form, Button } from 'antd';
import { UserSelect } from '@wetrial/component';

const selected = ['001', '003'];
const selected1 = ['001'];
const UserInfo = [
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
    <UserSelect
      cardInfo={(k) => {
        return <div>这里自定义显示，k是用户id：{k}</div>;
      }}
      value={selected1}
      dataSource={UserInfo}
      onChange={handleChange}
    ></UserSelect>
  );
};
