import React from 'react';
import { Authorized as RenderAuthoized } from '@wetrial/component';
import { Alert } from 'antd';

// RenderAuthorized参数为当前的用户权限，此处假设当前获取到的用户权限是admin
const Authorized = RenderAuthoized('admin');
const normalAccess = <Alert message="user Passed!" type="success" showIcon />;
const denyAccess = <Alert message="No permission." type="error" showIcon />;
const havePermission = () => {
  return false;
};

export default () => {
  return (
    <Authorized authority={havePermission} noMatch={denyAccess}>
      {normalAccess}
    </Authorized>
  );
};
