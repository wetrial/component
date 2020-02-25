import React from 'react';
import { Authorized } from '@wetrial/component';
import { Alert } from 'antd';

const normalAccess = <Alert message="user Passed!" type="success" showIcon />;
const denyAccess = <Alert message="No permission." type="error" showIcon />;

export default () => {
  return (
    <Authorized authority={['user', 'admin']} noMatch={denyAccess}>
      {normalAccess}
    </Authorized>
  );
};
