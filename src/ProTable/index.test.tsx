import { render } from 'enzyme';
import React from 'react';
import { Input } from 'antd';
import ProTable from './index';
import { columns } from './__tests__/data';

describe('BasicTable', () => {
  it('🎏 base use', () => {
    const html = render(
      <ProTable
        size="small"
        columns={columns}
        rowKey="key"
        pagination={{
          defaultCurrent: 10,
        }}
        searchType="simple"
        renderSearch={() => {
          return (
            <Input.Search
              style={{
                width: 200,
              }}
            />
          );
        }}
      />,
    );
    expect(html).toMatchSnapshot();
  });
});
