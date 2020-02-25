import React from 'react';
import { Authorized } from '@wetrial/component';
import { Alert } from 'antd';

export default () => {
  const normalAccess = <Alert message="Use Array as a parameter passed!" type="success" showIcon />;
  const denyAccess = <Alert message="No permission." type="error" showIcon />;

  return Authorized.hasPermissions('user') ? normalAccess : denyAccess;
};
