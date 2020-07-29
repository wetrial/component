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
        showSearch={true}
        style={{ width: '200px' }}
        // dropdownRender={() => {
        // }}
      >
        {userInfo.map((item) => {
          return (
            <Option key={item.UserId} value={item.FullName}>
              <span>Avatar</span>
              {item.FullName}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

UserSelect.defaultProps = {
  message: 'Hello',
};

export default UserSelect;
