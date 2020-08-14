import React from 'react';
import { UserSelect } from '@wetrial/component';

const selectedData = ['001', '003'];

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

export default () => {
  return <UserSelect selectedData={selectedData} dataSource={UserInfo}></UserSelect>;
};
