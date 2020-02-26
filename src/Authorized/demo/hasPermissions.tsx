import React from 'react';
import { Authorized as RenderAuthoized } from '@wetrial/component';
import { Alert } from 'antd';

// RenderAuthorized参数为当前的用户权限，此处假设当前获取到的用户权限是admin
const Authorized = RenderAuthoized('admin');
export default () => {
  const normalAccess = <Alert message="Use Array as a parameter passed!" type="success" showIcon />;
  const denyAccess = <Alert message="No permission." type="error" showIcon />;

  return Authorized.hasPermissions('user') ? normalAccess : denyAccess;
};
