import React from 'react';
import { Select } from 'antd';
import Item from 'antd/lib/list/Item';
// import classNames from 'classnames';

interface UserSelectProps {
  message?: string;
  data?: Array<any>;
  selectedData?: Array<any>;
  UserInfo?: Array<any>;
}
const { Option, OptGroup } = Select;

const UserSelect: React.FC<UserSelectProps> = (props) => {
  const { data, selectedData, userInfo } = props;
  return (
    <div>
      <Select
        style={{ width: '200px' }}
        dropdownRender={() => {
          return userInfo.map((item) => {
            return <div key={item.UserId}>{item.FullName}</div>;
          });
        }}
      ></Select>
    </div>
  );
};

UserSelect.defaultProps = {
  message: 'Hello',
};

export default UserSelect;
