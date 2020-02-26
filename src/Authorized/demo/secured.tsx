import React from 'react';
import { Authorized as RenderAuthoized } from '@wetrial/component';
import { Alert } from 'antd';

// RenderAuthorized参数为当前的用户权限，此处假设当前获取到的用户权限是admin
const { Secured } = RenderAuthoized('admin');

@Secured('admin')
class Index extends React.PureComponent {
  render() {
    return <Alert message="user Passed!" type="success" showIcon />;
  }
}
export default Index;
