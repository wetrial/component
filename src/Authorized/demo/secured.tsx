import React from 'react';
import { Authorized as RenderAuthorized } from '@wetrial/component';
import { Alert } from 'antd';

const { Secured } = RenderAuthorized();

@Secured('')
class Index extends React.PureComponent {
  render() {
    return <Alert message="user Passed!" type="success" showIcon />;
  }
}
export default Index;
