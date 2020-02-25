import React from 'react';
import { Authorized } from '@wetrial/component';
import { Alert } from 'antd';

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
