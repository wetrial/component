import * as React from 'react';
import FooterToolbar from '..';
import { Button } from 'antd';

export default () => {
  return (
    <>
      <div style={{ background: '#f7f7f7', padding: 24 }}>
        <p>Content Content Content Content</p>
        <FooterToolbar extra="extra information">
          <Button>取消</Button>
          <Button type="primary">提交</Button>
        </FooterToolbar>
      </div>
    </>
  );
};
